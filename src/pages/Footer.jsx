
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
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Leaf className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold text-green-50">SRI AYURVEDA CLINIC</h3>
                <p className="text-sm text-green-100">& PANCHAKARMA CENTER</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Restore health, renew vitality, live in harmony. Your trusted partner in holistic wellness through authentic Ayurvedic care.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-green-100">Quick Links</h4>
            <div className="space-y-3">
              <Link
                to="/"
                className="group flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-600 hover:to-emerald-600 rounded-lg transition transform hover:translate-x-1 shadow-md hover:shadow-lg"
              >
                <span className="text-green-50 font-semibold">Home</span>
                <ChevronRight className="h-5 w-5 text-amber-400 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/about"
                className="group flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 rounded-lg transition transform hover:translate-x-1 shadow-md hover:shadow-lg"
              >
                <span className="text-green-50 font-semibold">About Us</span>
                <ChevronRight className="h-5 w-5 text-amber-400 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/panchakarma"
                className="group flex items-center justify-between px-4 py-3 bg-gradient-to-r from-teal-700 to-cyan-700 hover:from-teal-600 hover:to-cyan-600 rounded-lg transition transform hover:translate-x-1 shadow-md hover:shadow-lg"
              >
                <span className="text-green-50 font-semibold">Panchakarma</span>
                <ChevronRight className="h-5 w-5 text-amber-400 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/contact"
                className="group flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-700 to-green-700 hover:from-cyan-600 hover:to-green-600 rounded-lg transition transform hover:translate-x-1 shadow-md hover:shadow-lg"
              >
                <span className="text-green-50 font-semibold">Contact</span>
                <ChevronRight className="h-5 w-5 text-amber-400 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-green-50">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="tel:8113452402"
                className="flex items-center space-x-3 text-green-100 hover:text-green-50 transition"
              >
                <Phone className="h-5 w-5" />
                <span>8113452402</span>
              </a>
              <a
                href="mailto:sriayurveda23@gmail.com"
                className="flex items-center space-x-3 text-green-100 hover:text-green-50 transition"
              >
                <Mail className="h-5 w-5" />
                <span>sriayurveda23@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="border-t border-green-700 pt-8 mb-8">
          <h4 className="text-lg font-bold mb-4 text-center text-green-50">Follow Us</h4>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className={`text-green-100 transition transform hover:scale-125 ${social.color}`}
                >
                  <Icon className="h-7 w-7" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 text-center">
          <p className="text-green-100 flex items-center justify-center space-x-2">
            <span>© 2026 Sri Ayurveda Clinic & Panchakarma Center. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for your wellness</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
