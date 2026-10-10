import { CalendarDays, Check, Clock3, MapPin, MessageCircle } from 'lucide-react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import { createWhatsAppUrl } from '../lib/whatsapp';
import './BookingConfirmation.css';

function formatAppointmentDate(date) {
  const parsedDate = new Date(`${date}T12:00:00`);
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parsedDate);
}

export default function BookingConfirmation() {
  const { state } = useLocation();
  const booking = state?.booking;

  if (!booking) {
    return <Navigate to="/contact" replace />;
  }

  const clinicWhatsAppUrl = createWhatsAppUrl(booking);
  const isShopOrder = booking.requestType === 'shop';
  const isTreatmentBooking = booking.requestType === 'treatment';

  return (
    <main className="booking-confirmation-page">
      <Seo
        title="Request Received | Sri Ayurveda"
        description="Your request has been received by Sri Ayurveda Clinic."
        canonical="https://www.sriayurvedawellness.com/booking-confirmation"
      />
      <section className="booking-confirmation-card" aria-labelledby="booking-confirmation-title">
        <div className="booking-confirmation-icon" aria-hidden="true"><Check /></div>
        <p className="booking-confirmation-eyebrow">SRI AYURVEDA CLINIC</p>
        <h1 id="booking-confirmation-title">Thank you, {booking.name}</h1>
        <p className="booking-confirmation-intro">
          {isShopOrder
            ? 'Your order request has been recorded. The clinic will contact you to confirm availability, delivery, and payment details.'
            : 'Your request has been recorded. The clinic will contact you to confirm treatment suitability and appointment availability.'}
        </p>

        <div className="booking-confirmation-details">
          {isShopOrder ? (
            <>
              {(booking.items || []).map((item) => (
                <div key={item.name}>
                  <MessageCircle aria-hidden="true" />
                  <span><small>Selected item</small><strong>{item.name} × {item.quantity}</strong></span>
                </div>
              ))}
              <div>
                <MessageCircle aria-hidden="true" />
                <span><small>Estimated total</small><strong>₹{Number(booking.total || 0).toLocaleString('en-IN')}</strong></span>
              </div>
              {booking.deliveryAddress && (
                <div>
                  <MapPin aria-hidden="true" />
                  <span>
                    <small>Delivery address</small>
                    <strong>
                      {[
                        booking.deliveryAddress.addressLine1,
                        booking.deliveryAddress.landmark,
                        booking.deliveryAddress.city,
                        booking.deliveryAddress.state,
                        booking.deliveryAddress.postalCode,
                      ].filter(Boolean).join(', ')}
                    </strong>
                    {booking.deliveryLocation && (
                      <a
                        href={`https://www.google.com/maps?q=${booking.deliveryLocation.latitude},${booking.deliveryLocation.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View shared map pin
                      </a>
                    )}
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              {booking.treatment && (
                <div>
                  <MessageCircle aria-hidden="true" />
                  <span><small>Treatment</small><strong>{booking.treatment}</strong></span>
                </div>
              )}
              <div>
                <CalendarDays aria-hidden="true" />
                <span><small>Preferred date</small><strong>{formatAppointmentDate(booking.appointmentDate)}</strong></span>
              </div>
              <div>
                <Clock3 aria-hidden="true" />
                <span><small>Preferred time</small><strong>{booking.appointmentTime}</strong></span>
              </div>
              <div>
                <MessageCircle aria-hidden="true" />
                <span><small>{isTreatmentBooking ? 'Consultation type' : 'Consultation'}</small><strong>{booking.consultationType}</strong></span>
              </div>
            </>
          )}
        </div>

        <p className="booking-confirmation-note">
          This confirms receipt of your request, not an order or appointment confirmation. The clinic must confirm availability and next steps.
          If WhatsApp opened after your request was recorded, review the draft and press Send to deliver it to the clinic.
        </p>

        <div className="booking-confirmation-actions">
          <a href={clinicWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="booking-confirmation-whatsapp">
            <MessageCircle aria-hidden="true" />
            Open clinic WhatsApp
          </a>
          <Link to="/" className="booking-confirmation-home">Return to home</Link>
        </div>
      </section>
    </main>
  );
}
