import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Send } from 'lucide-react';
import { fetchApi } from '../lib/api';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../lib/seo';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [emailInfo, setEmailInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Send to backend to save to Excel file
      const data = await fetchApi('/contact-submit', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      console.log('Form submitted successfully:', data);
      setEmailInfo(data.email || null);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
        <div className="text-center mb-20">
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
                    <p className="text-gray-700">8113452402</p>
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
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Message
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
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    <p>Thank you for contacting us! We'll get back to you soon.</p>
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

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary btn-lg btn-block"
                >
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
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
