
import { Leaf, Heart, Instagram, Mail, Phone, Facebook, Youtube, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sri_ayurveda_clinic',
      icon: Instagram,
      color: 'hover:text-pink-400',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/917619529616',
      icon: MessageCircle,
      color: 'hover:text-green-400',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: Facebook,
      color: 'hover:text-blue-400',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: Youtube,
      color: 'hover:text-red-400',
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <div className="footer-brand">
              <span className="footer-brand-mark"><Leaf aria-hidden="true" /></span>
              <div>
                <h3>SRI AYURVEDA CLINIC</h3>
                <p>& PANCHAKARMA CENTER</p>
              </div>
            </div>
            <p className="footer-copy">
              Restore health, renew vitality, live in harmony. Your trusted partner in holistic wellness through authentic Ayurvedic care.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Explore</h4>
            <div className="footer-link-list">
              <Link
                to="/"
                className="footer-link"
              >
                <span>Home</span><ChevronRight aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="footer-link"
              >
                <span>About Us</span><ChevronRight aria-hidden="true" />
              </Link>
              <Link
                to="/panchakarma"
                className="footer-link"
              >
                <span>Panchakarma</span><ChevronRight aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="footer-link"
              >
                <span>Contact</span><ChevronRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="footer-policy-column">
            <h4 className="footer-heading">Policies</h4>
            <div className="footer-link-list">
              <Link
                to="/terms-of-service"
                className="footer-link"
              >
                <span>Terms & Conditions</span><ChevronRight aria-hidden="true" />
              </Link>
              <Link
                to="/privacy-policy"
                className="footer-link"
              >
                <span>Privacy Policy</span><ChevronRight aria-hidden="true" />
              </Link>
              <Link to="/refund-cancellation-policy" className="footer-link"><span>Refund & Cancellation</span><ChevronRight aria-hidden="true" /></Link>
              <Link to="/shipping-delivery-policy" className="footer-link"><span>Shipping & Delivery</span><ChevronRight aria-hidden="true" /></Link>
              <Link to="/disclaimer-policy" className="footer-link"><span>Disclaimer Policy</span><ChevronRight aria-hidden="true" /></Link>
              <Link to="/grievance-redressal" className="footer-link"><span>Grievance Redressal</span><ChevronRight aria-hidden="true" /></Link>
              <Link to="/cookie-policy" className="footer-link"><span>Cookie Policy</span><ChevronRight aria-hidden="true" /></Link>
            </div>
          </div>

          <div className="footer-contact-column">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-contact-list">
              <a
                href="tel:8113452402"
                className="footer-contact-link"
              >
                <Phone aria-hidden="true" />
                <span>8113452402</span>
              </a>
              <a
                href="mailto:sriayurveda23@gmail.com"
                className="footer-contact-link"
              >
                <Mail aria-hidden="true" />
                <span>sriayurveda23@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-meta">
          <div className="footer-social-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social-links">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className={`footer-social-link ${social.color}`}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              <span>© 2026 Sri Ayurveda Clinic & Panchakarma Center</span>
              <Heart aria-hidden="true" />
              <span>Made for your wellness</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
