import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Send } from 'lucide-react';
import { fetchApi } from '../lib/api';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import { sendWhatsAppMessage } from '../lib/whatsapp';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    consultationType: 'In-person',
    message: '',
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
  const [emailInfo, setEmailInfo] = useState(null);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpVerified, setPhoneOtpVerified] = useState(false);
  const [emailOtpVerified, setEmailOtpVerified] = useState(false);
  const [phoneOtpInput, setPhoneOtpInput] = useState('');
  const [emailOtpInput, setEmailOtpInput] = useState('');
  const [otpNotice, setOtpNotice] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpSending, setOtpSending] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [communicationConsent, setCommunicationConsent] = useState(false);
  const [teleconsultationConsent, setTeleconsultationConsent] = useState(false);

  const validatePhone = (value) => /^\+?[0-9\s-]{10,15}$/.test(value);
  const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);

  const handleSendOtp = async (type) => {
    const value = type === 'phone' ? formData.phone : formData.email;

    if (type === 'phone') {
      if (!validatePhone(value)) {
        setOtpError('Please enter a valid phone number before requesting an OTP.');
        setOtpNotice('');
        return;
      }
    } else if (!validateEmail(value)) {
      setOtpError('Please enter a valid email address before requesting an OTP.');
      setOtpNotice('');
      return;
    }

    setOtpSending(true);
    setOtpError('');

    try {
      const response = await fetchApi('/send-otp', {
        method: 'POST',
        body: JSON.stringify({ type, contact: value }),
      });

      if (response.success) {
        if (type === 'phone') {
          setPhoneOtpSent(true);
          setPhoneOtpVerified(false);
          setPhoneOtpInput('');
        } else {
          setEmailOtpSent(true);
          setEmailOtpVerified(false);
          setEmailOtpInput('');
        }
        setOtpNotice(response.message || `OTP sent to your ${type === 'email' ? 'email' : 'phone'}.`);
      } else {
        setOtpError(response.error || 'Unable to send OTP.');
        setOtpNotice('');
      }
    } catch (error) {
      setOtpError(error.message || 'Unable to send OTP right now.');
      setOtpNotice('');
    } finally {
      setOtpSending(false);
    }
  };

  const handleVerifyOtp = async (type) => {
    const value = type === 'phone' ? formData.phone : formData.email;
    const otpValue = type === 'phone' ? phoneOtpInput : emailOtpInput;

    if (!otpValue) {
      setOtpError(`Please enter the OTP sent to your ${type === 'email' ? 'email' : 'phone'}.`);
      return;
    }

    try {
      const response = await fetchApi('/verify-otp', {
        method: 'POST',
        body: JSON.stringify({ type, contact: value, otp: otpValue }),
      });

      if (response.success) {
        if (type === 'phone') {
          setPhoneOtpVerified(true);
        } else {
          setEmailOtpVerified(true);
        }
        setOtpError('');
        setOtpNotice(response.message || 'OTP verified successfully.');
      } else {
        setOtpError(response.error || 'Unable to verify OTP.');
        setOtpNotice('');
      }
    } catch (error) {
      setOtpError(error.message || 'Unable to verify OTP.');
      setOtpNotice('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasVerifiedContacts = Boolean(
      formData.phone && phoneOtpVerified && formData.email && emailOtpVerified,
    );

    if (!hasVerifiedContacts || !privacyConsent || !communicationConsent || (formData.consultationType === 'Online' && !teleconsultationConsent)) {
      setOtpError('Please verify both your phone number and email before scheduling an appointment.');
      setOtpNotice('');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('loading');

    try {
      const whatsappResult = await sendWhatsAppMessage(formData);
      console.log('WhatsApp message opened:', whatsappResult);

      // Send to backend to save to Excel file
      const data = await fetchApi('/contact-submit', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      console.log('Form submitted successfully:', data);
      setEmailInfo(data.email || null);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        appointmentDate: '',
        appointmentTime: '',
        consultationType: 'In-person',
        message: '',
      });
      setPhoneOtpSent(false);
      setEmailOtpSent(false);
      setPhoneOtpVerified(false);
      setEmailOtpVerified(false);
      setPhoneOtpInput('');
      setEmailOtpInput('');
      setOtpNotice('');
      setOtpError('');
      setPrivacyConsent(false);
      setCommunicationConsent(false);
      setTeleconsultationConsent(false);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'phone') {
      setPhoneOtpSent(false);
      setPhoneOtpVerified(false);
      setPhoneOtpInput('');
    }

    if (name === 'email') {
      setEmailOtpSent(false);
      setEmailOtpVerified(false);
      setEmailOtpInput('');
    }

    setOtpNotice('');
    setOtpError('');
  };

  return (
    <section id="contact" className="py-14 bg-white">
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
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-700 mb-8">Book a consultation at Sri Ayurveda Clinic & Panchakarma Center in Ramanagara for authentic Ayurvedic care.</p>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-8">Contact Information</h3>

              <div className="space-y-8">
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
                    <a href="mailto:sriayurveda23@gmail.com" className="text-gold hover:text-amber font-semibold transition">
                      sriayurveda23@gmail.com
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

          <div>
            <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-green-900 mb-8">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white"
                      placeholder="your.email@example.com"
                    />
                    <div className="otp-actions">
                      <button type="button" className="otp-btn" disabled={otpSending} onClick={() => handleSendOtp('email')}>
                        {otpSending ? 'Sending...' : 'Send OTP'}
                      </button>
                    </div>
                    {emailOtpSent && !emailOtpVerified && (
                      <div className="otp-step">
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          pattern="[0-9]{6}"
                          value={emailOtpInput}
                          onChange={(e) => setEmailOtpInput(e.target.value)}
                          className="otp-input"
                          placeholder="Enter OTP"
                        />
                        <button type="button" className="otp-verify-btn" onClick={() => handleVerifyOtp('email')}>
                          Verify
                        </button>
                      </div>
                    )}
                    {emailOtpVerified && <p className="otp-success">Email verified</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white"
                      placeholder="+91 XXXXXXXXXX"
                    />
                    <div className="otp-actions">
                      <button type="button" className="otp-btn" disabled={otpSending} onClick={() => handleSendOtp('phone')}>
                        {otpSending ? 'Sending...' : 'Send OTP'}
                      </button>
                    </div>
                    {phoneOtpSent && !phoneOtpVerified && (
                      <div className="otp-step">
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          pattern="[0-9]{6}"
                          value={phoneOtpInput}
                          onChange={(e) => setPhoneOtpInput(e.target.value)}
                          className="otp-input"
                          placeholder="Enter OTP"
                        />
                        <button type="button" className="otp-verify-btn" onClick={() => handleVerifyOtp('phone')}>
                          Verify
                        </button>
                      </div>
                    )}
                    {phoneOtpVerified && <p className="otp-success">Phone verified</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="appointmentDate" className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="appointmentTime" className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Time Slot
                    </label>
                    <select
                      id="appointmentTime"
                      name="appointmentTime"
                      required
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white"
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {otpNotice && <p className="otp-success">{otpNotice}</p>}
                {otpError && <p className="otp-error">{otpError}</p>}

                <div>
                  <label htmlFor="consultationType" className="block text-sm font-semibold text-gray-700 mb-3">
                    Consultation Type
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={(event) => { handleChange(event); if (event.target.value !== 'Online') setTeleconsultationConsent(false); }}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white"
                  >
                    {consultationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.consultationType === 'Online' && <div className="consent-group"><label><input type="checkbox" checked={teleconsultationConsent} onChange={(event) => setTeleconsultationConsent(event.target.checked)} required /> <span>I consent to the <a href="/terms-of-service">online consultation terms</a>.</span></label></div>}

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Tell Us About Your Concern
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition resize-none bg-white"
                    placeholder="Share your symptoms, goals, or any Ayurveda questions..."
                  ></textarea>
                </div>

                <div className="rounded-3xl border border-green-200 bg-green-50 p-5 text-sm text-green-900">
                  <p className="font-semibold mb-2">Quick booking note</p>
                  <p>
                    Choose a preferred date and time, and our Ayurveda wellness coordinator will confirm the final slot shortly.
                    We prioritise appointments based on your selected consultation type and availability.
                  </p>
                </div>

                {status === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    <p>Thank you! Your consultation request is received.</p>
                    {emailInfo && emailInfo.sent === false && (
                      <p className="text-sm text-yellow-800 mt-2">Notification email was not sent: {emailInfo.error || 'unknown reason'}. Please contact us directly at sriayurveda25@gmail.com.</p>
                    )}
                    {emailInfo && emailInfo.sent === true && (
                      <p className="text-sm text-green-800 mt-2">Notification email sent successfully.</p>
                    )}
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <div className="appointment-consent consent-group">
                  <p className="appointment-consent-title">Before you book</p>
                  <label><input type="checkbox" checked={privacyConsent} onChange={(event) => setPrivacyConsent(event.target.checked)} required /> <span>I agree to the <a href="/privacy-policy">Privacy Policy</a>.</span></label>
                  <label><input type="checkbox" checked={communicationConsent} onChange={(event) => setCommunicationConsent(event.target.checked)} required /> <span>I consent to receive communication from the clinic about my appointment and care.</span></label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || !formData.phone || !formData.email || !phoneOtpVerified || !emailOtpVerified || !privacyConsent || !communicationConsent}
                  className="btn btn-primary btn-lg btn-block"
                >
                  <span>{status === 'loading' ? 'Booking...' : 'Book Consultation'}</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
