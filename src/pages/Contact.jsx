import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Send } from 'lucide-react';
import { useCart, formatPrice } from '../lib/cart';
import { fetchApi } from '../lib/api';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import { createWhatsAppUrl } from '../lib/whatsapp';
import PhoneEmailWidget from '../components/PhoneEmailWidget';
import './Contact.css';

const PHONE_CLIENT_ID = import.meta.env.PHONE_EMAIL_PHONE_CLIENT_ID;
const EMAIL_CLIENT_ID = import.meta.env.PHONE_EMAIL_EMAIL_CLIENT_ID;

export default function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const inquiry = location.state?.inquiry;
  const isShopInquiry = inquiry?.type === 'shop' && Array.isArray(inquiry.items) && inquiry.items.length > 0;
  const isTreatmentInquiry = inquiry?.type === 'treatment' && Boolean(inquiry.treatment);
  const initialMessage = isShopInquiry
    ? 'Please contact me about availability, delivery, and payment for these items.'
    : isTreatmentInquiry
      ? `I would like to book ${inquiry.treatment}. Please confirm suitability and availability.`
      : '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    consultationType: isShopInquiry ? 'Shop order' : 'In-person',
    message: initialMessage,
    addressLine1: '',
    landmark: '',
    city: '',
    postalCode: '',
    state: '',
    deliveryLocation: null,
  });

  const availableTimes = [
    '09:30 AM',
    '11:00 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
  ];

  const consultationTypes = ['In-person', 'Online', 'Phone'];
  const [status, setStatus] = useState('idle');
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [communicationConsent, setCommunicationConsent] = useState(false);
  const [teleconsultationConsent, setTeleconsultationConsent] = useState(false);
  const [shippingConsent, setShippingConsent] = useState(false);
  const [locationStatus, setLocationStatus] = useState('idle');
  const [locationError, setLocationError] = useState('');

  const handleGetDeliveryLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Location sharing is not supported by this browser. You can still enter your address manually.');
      setLocationStatus('error');
      return;
    }

    setLocationStatus('loading');
    setLocationError('');
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setFormData((prev) => ({
          ...prev,
          deliveryLocation: {
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
          },
        }));
        setLocationStatus('success');
      },
      (error) => {
        const message = error.code === error.PERMISSION_DENIED
          ? 'Location permission was declined. You can still enter your delivery address manually.'
          : error.code === error.TIMEOUT
            ? 'Location lookup timed out. Please try again or enter your address manually.'
            : 'Unable to get your location. Please try again or enter your address manually.';
        setLocationError(message);
        setLocationStatus('error');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 },
    );
  };

  const handleClearDeliveryLocation = () => {
    setFormData((prev) => ({ ...prev, deliveryLocation: null }));
    setLocationStatus('idle');
    setLocationError('');
  };

  // phone.email widgets verify the contact independently in their own popup, so the
  // value they confirm (not necessarily what's currently typed) becomes the source of truth.
  const handlePhoneVerified = (contact) => {
    setFormData((prev) => ({ ...prev, phone: contact }));
    setPhoneVerified(true);
    setVerificationError('');
  };

  const handleEmailVerified = (contact) => {
    setFormData((prev) => ({ ...prev, email: contact }));
    setEmailVerified(true);
    setVerificationError('');
  };

  const handleChangeVerifiedContact = (type) => {
    const isPhone = type === 'phone';
    setFormData((prev) => ({ ...prev, [type]: '' }));
    (isPhone ? setPhoneVerified : setEmailVerified)(false);
    setVerificationError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasVerifiedContacts = Boolean(
      formData.phone && phoneVerified && formData.email && emailVerified,
    );

    if (
      !hasVerifiedContacts ||
      !privacyConsent ||
      !communicationConsent ||
      (isShopInquiry && !shippingConsent) ||
      (isShopInquiry && (!formData.addressLine1 || !formData.city || !formData.postalCode || !formData.state)) ||
      (!isShopInquiry && (!formData.appointmentDate || !formData.appointmentTime)) ||
      (!isShopInquiry && formData.consultationType === 'Online' && !teleconsultationConsent)
    ) {
      setVerificationError('Please complete the required contact verification and consent fields before continuing.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('loading');
    const whatsappWindow = window.open('', '_blank');

    try {
      const bookingRequest = {
        ...formData,
        requestType: isShopInquiry ? 'shop' : isTreatmentInquiry ? 'treatment' : 'consultation',
        ...(isTreatmentInquiry ? { treatment: inquiry.treatment } : {}),
        ...(isShopInquiry
          ? {
              items: inquiry.items,
              total: inquiry.total,
              deliveryAddress: {
                addressLine1: formData.addressLine1,
                landmark: formData.landmark,
                city: formData.city,
                postalCode: formData.postalCode,
                state: formData.state,
              },
              deliveryLocation: formData.deliveryLocation,
              orderDetails: [
                'Selected products:',
                ...inquiry.items.map((item) => `- ${item.name} x${item.quantity}: ${formatPrice(item.amount * item.quantity)}`),
                `Estimated total: ${formatPrice(inquiry.total)}`,
                '',
                'Delivery address:',
                formData.addressLine1,
                ...(formData.landmark ? [`Landmark: ${formData.landmark}`] : []),
                `${formData.city}, ${formData.state} - ${formData.postalCode}`,
                ...(formData.deliveryLocation
                  ? [`Delivery location: https://www.google.com/maps?q=${formData.deliveryLocation.latitude},${formData.deliveryLocation.longitude}`]
                  : []),
              ].join('\n'),
            }
          : {}),
      };
      await fetchApi('/contact-submit', {
        method: 'POST',
        body: JSON.stringify(bookingRequest),
      });
      if (whatsappWindow && !whatsappWindow.closed) {
        whatsappWindow.location.href = createWhatsAppUrl(bookingRequest);
      }
      if (isShopInquiry) {
        clearCart();
      }
      navigate('/booking-confirmation', { state: { booking: bookingRequest } });
    } catch (error) {
      if (whatsappWindow && !whatsappWindow.closed) {
        whatsappWindow.close();
      }
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Editing a verified field after the fact invalidates that verification,
    // since the value no longer matches what phone.email confirmed.
    if (name === 'phone') {
      setPhoneVerified(false);
    }

    if (name === 'email') {
      setEmailVerified(false);
    }

    setVerificationError('');
  };

  return (
    <section id="contact" className="contact-page py-14 bg-white">
      <Seo
        title={SEO_CONFIG.pages.contact.title}
        description={SEO_CONFIG.pages.contact.description}
        keywords={SEO_CONFIG.pages.contact.keywords}
        canonical={`${SEO_CONFIG.siteUrl}/contact`}
        openGraph={{
          title: SEO_CONFIG.pages.contact.title,
          description: SEO_CONFIG.pages.contact.description,
          url: `${SEO_CONFIG.siteUrl}/contact`,
          image: SEO_CONFIG.siteImage,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contact-heading text-center mb-10">
          <h2 className="text-4xl font-bold text-green-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-700 mb-8">Book a consultation at Sri Ayurveda Clinic & Panchakarma Center in Ramanagara for authentic Ayurvedic care.</p>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
        </div>

        <div className="contact-layout grid md:grid-cols-2 gap-16">
          <div className="contact-details space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-8">Contact Information</h3>

              <div className="contact-info-list space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2 text-lg">Location</h4>
                    <p className="text-gray-700 leading-relaxed">#Hamsa complex, Magadi main road,<br />near Sharath Memorial School,<br />Ramanagara - 562159</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2 text-lg">Phone</h4>
                    <p className="text-gray-700">+919187398489</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2 text-lg">WhatsApp</h4>
                    <a href="https://wa.me/917619529616" className="text-gold hover:text-amber font-semibold transition">
                      +91 7619529616
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2 text-lg">Email</h4>
                    <a href="mailto:lakshmi@sriayurvedawellness.com" className="text-gold hover:text-amber font-semibold transition">
                      lakshmi@sriayurvedawellness.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg flex-shrink-0">
                    <Instagram className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2 text-lg">Instagram</h4>
                    <a
                      href="https://instagram.com/sri_ayurveda_clinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-amber font-semibold transition"
                    >
                      @sri_ayurveda_clinic
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-xl">
              <h4 className="font-bold text-green-900 mb-4 text-lg">Visit Our Website</h4>
              <a
                href="https://www.sriayurvedawellness.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-amber font-semibold text-lg transition"
              >
                sriayurvedawellness.com
              </a>
            </div>
          </div>

          <div className="contact-form-column">
            <div className="contact-form-panel">
              <div className="contact-form-heading">
                <span className="contact-form-eyebrow">SRI AYURVEDA CLINIC</span>
                <h3>{isShopInquiry ? 'Continue your order request' : isTreatmentInquiry ? 'Book a treatment' : 'Request a Consultation'}</h3>
                <p>
                  {isShopInquiry
                    ? 'Confirm the selected items and share your contact details. We’ll prepare a WhatsApp order request for the clinic.'
                    : 'Share your details and preferred appointment time. We’ll contact you to confirm availability.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-request-form">
                {isShopInquiry && (
                  <section className="contact-form-section" aria-labelledby="shop-items-heading">
                    <div className="contact-section-heading">
                      <span className="contact-section-number">01</span>
                      <div>
                        <h4 id="shop-items-heading">Your selected items</h4>
                        <p>These items and the estimated total will be included in the WhatsApp request.</p>
                      </div>
                    </div>
                    <div className="contact-order-summary">
                      {inquiry.items.map((item) => (
                        <div className="contact-order-item" key={item.name}>
                          <span>{item.name} × {item.quantity}</span>
                          <strong>{formatPrice(item.amount * item.quantity)}</strong>
                        </div>
                      ))}
                      <div className="contact-order-total">
                        <span>Estimated total</span>
                        <strong>{formatPrice(inquiry.total)}</strong>
                      </div>
                    </div>
                  </section>
                )}

                <section className="contact-form-section" aria-labelledby="contact-details-heading">
                  <div className="contact-section-heading">
                    <span className="contact-section-number">{isShopInquiry ? '02' : '01'}</span>
                    <div>
                      <h4 id="contact-details-heading">Your details</h4>
                      <p>Verify your email and mobile number to continue.</p>
                    </div>
                  </div>

                  <div className="contact-form-grid">
                    <div className="contact-field contact-field-full">
                      <label htmlFor="name">Full name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="contact-field">
                      <span className="contact-field-label">Email address</span>
                      <div className={`contact-verification-card${emailVerified ? ' is-verified' : ''}`}>
                        {emailVerified ? (
                          <>
                            <p className="contact-verified-value">{formData.email}</p>
                            <div className="contact-verification-result">
                              <p className="verification-success"><span aria-hidden="true">✓</span> Email verified</p>
                              <button type="button" className="contact-change-link" onClick={() => handleChangeVerifiedContact('email')}>Use a different email</button>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="contact-verification-hint">Verify your email with the secure email button.</p>
                            <PhoneEmailWidget type="email" clientId={EMAIL_CLIENT_ID} onVerified={handleEmailVerified} onError={setVerificationError} />
                          </>
                        )}
                      </div>
                    </div>

                    <div className="contact-field">
                      <span className="contact-field-label">Mobile number</span>
                      <div className={`contact-verification-card${phoneVerified ? ' is-verified' : ''}`}>
                        {phoneVerified ? (
                          <>
                            <p className="contact-verified-value">{formData.phone}</p>
                            <div className="contact-verification-result">
                              <p className="verification-success"><span aria-hidden="true">✓</span> Mobile number verified</p>
                              <button type="button" className="contact-change-link" onClick={() => handleChangeVerifiedContact('phone')}>Use a different number</button>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="contact-verification-hint">Verify your mobile number with the secure phone button.</p>
                            <PhoneEmailWidget type="phone" clientId={PHONE_CLIENT_ID} onVerified={handlePhoneVerified} onError={setVerificationError} />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </section>

                {isShopInquiry && (
                  <section className="contact-form-section" aria-labelledby="delivery-address-heading">
                    <div className="contact-section-heading">
                      <span className="contact-section-number">03</span>
                      <div>
                        <h4 id="delivery-address-heading">Delivery address</h4>
                        <p>Enter the address for delivery. You can optionally share a map pin to help the clinic deliver to the location.</p>
                      </div>
                    </div>

                    <div className="contact-form-grid">
                      <div className="contact-field contact-field-full">
                        <label htmlFor="addressLine1">House / building, street and area</label>
                        <textarea
                          id="addressLine1"
                          name="addressLine1"
                          autoComplete="street-address"
                          required
                          rows={2}
                          value={formData.addressLine1}
                          onChange={handleChange}
                          placeholder="Enter house number, building, street and area"
                        />
                      </div>
                      <div className="contact-field contact-field-full">
                        <label htmlFor="landmark">Nearby landmark <span className="contact-optional-label">(optional)</span></label>
                        <input
                          type="text"
                          id="landmark"
                          name="landmark"
                          autoComplete="off"
                          value={formData.landmark}
                          onChange={handleChange}
                          placeholder="For example, near a school or temple"
                        />
                      </div>
                      <div className="contact-field">
                        <label htmlFor="city">City / town</label>
                        <input type="text" id="city" name="city" autoComplete="address-level2" required value={formData.city} onChange={handleChange} placeholder="City or town" />
                      </div>
                      <div className="contact-field">
                        <label htmlFor="postalCode">PIN code</label>
                        <input type="text" id="postalCode" name="postalCode" autoComplete="postal-code" inputMode="numeric" pattern="[1-9][0-9]{5}" title="Enter a valid 6-digit Indian PIN code" required value={formData.postalCode} onChange={handleChange} placeholder="6-digit PIN code" />
                      </div>
                      <div className="contact-field contact-field-full">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" autoComplete="address-level1" required value={formData.state} onChange={handleChange} placeholder="State" />
                      </div>
                    </div>

                    <div className="delivery-location-control">
                      {formData.deliveryLocation ? (
                        <div className="delivery-location-status" role="status">
                          <MapPin aria-hidden="true" />
                          <span>Map pin added to your delivery request.</span>
                          <button type="button" onClick={handleClearDeliveryLocation}>Remove pin</button>
                        </div>
                      ) : (
                        <button type="button" className="delivery-location-button" onClick={handleGetDeliveryLocation} disabled={locationStatus === 'loading'}>
                          <MapPin aria-hidden="true" />
                          {locationStatus === 'loading' ? 'Getting your location…' : 'Use my current location'}
                        </button>
                      )}
                      <p className="contact-booking-note">Your browser will ask permission before sharing your location. If you allow it, a Google Maps pin link will be included with the delivery address in the order record and WhatsApp draft for the clinic. Location sharing is optional.</p>
                      {locationError && <p className="verification-error" role="alert">{locationError}</p>}
                    </div>
                  </section>
                )}

                {!isShopInquiry && <section className="contact-form-section" aria-labelledby="appointment-details-heading">
                  <div className="contact-section-heading">
                    <span className="contact-section-number">{isTreatmentInquiry ? '02' : '02'}</span>
                    <div>
                      <h4 id="appointment-details-heading">Appointment preferences</h4>
                      <p>Choose a preferred date, time and consultation type.</p>
                    </div>
                  </div>

                  <div className="contact-form-grid">
                    <div className="contact-field">
                      <label htmlFor="appointmentDate">Preferred date</label>
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.appointmentDate}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="appointmentTime">Preferred time</label>
                      <select
                        id="appointmentTime"
                        name="appointmentTime"
                        required
                        value={formData.appointmentTime}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select a time</option>
                        {availableTimes.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>

                    <div className="contact-field contact-field-full">
                      <label htmlFor="consultationType">Consultation type</label>
                      <select
                        id="consultationType"
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={(event) => { handleChange(event); if (event.target.value !== 'Online') setTeleconsultationConsent(false); }}
                      >
                        {consultationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {formData.consultationType === 'Online' && <div className="consent-group"><label><input type="checkbox" checked={teleconsultationConsent} onChange={(event) => setTeleconsultationConsent(event.target.checked)} required /> <span>I consent to the <a href="/terms-of-service">online consultation terms</a>.</span></label></div>}
                </section>}

                {!isShopInquiry && <section className="contact-form-section" aria-labelledby="message-heading">
                  <div className="contact-section-heading">
                    <span className="contact-section-number">03</span>
                    <div>
                      <h4 id="message-heading">How can we help?</h4>
                      <p>Tell us a little about what you’d like support with.</p>
                    </div>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="message">Your message</label>
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Share your concerns or any questions for our clinic..."
                    />
                  </div>
                  <p className="contact-booking-note">Your preferred date and time are requests; our team will confirm the final appointment.</p>
                </section>}

                {verificationError && <p className="verification-error" role="alert">{verificationError}</p>}

                <div className="appointment-consent consent-group">
                  <p className="appointment-consent-title">Before you book</p>
                  <label><input type="checkbox" checked={privacyConsent} onChange={(event) => setPrivacyConsent(event.target.checked)} required /> <span>I agree to the <a href="/privacy-policy">Privacy Policy</a>.</span></label>
                  <label><input type="checkbox" checked={communicationConsent} onChange={(event) => setCommunicationConsent(event.target.checked)} required /> <span>{isShopInquiry ? 'I consent to receive communication from the clinic about my order request.' : 'I consent to receive communication from the clinic about my appointment and care.'}</span></label>
                  {isShopInquiry && <label><input type="checkbox" checked={shippingConsent} onChange={(event) => setShippingConsent(event.target.checked)} required /> <span>I agree to the <a href="/shipping-delivery-policy">Shipping & Return Policy</a>.</span></label>}
                </div>

                {status === 'error' && (
                  <div className="form-feedback form-feedback-error" role="alert">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || !formData.phone || !formData.email || !phoneVerified || !emailVerified || !privacyConsent || !communicationConsent || (isShopInquiry && !shippingConsent)}
                  className="contact-submit-button"
                >
                  <span>
                    {status === 'loading'
                      ? 'Preparing WhatsApp request...'
                      : isShopInquiry
                        ? 'Continue to WhatsApp order request'
                        : 'Continue to WhatsApp booking request'}
                  </span>
                  <Send aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
