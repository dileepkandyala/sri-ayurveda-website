import { useState, useEffect } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { SEO_CONFIG } from '../lib/seo';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPageElement',
      'name': 'Sri Ayurveda Wellness Newsletter',
      'description': SEO_CONFIG.pages.newsletter.description,
      'url': `${SEO_CONFIG.siteUrl}/#newsletter`,
      'isPartOf': {
        '@type': 'WebPage',
        '@id': `${SEO_CONFIG.siteUrl}/`
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you'd send this to your backend
      setStatus('success');
      setMessage('Thank you! Check your email for wellness tips.');
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-gradient-to-r from-deep-green via-emerald-700 to-green-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated & Healthy</h2>
          <p className="text-green-100 text-lg">
            Get exclusive wellness tips, seasonal health advice, and special offers delivered to your inbox
          </p>
        </div>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-300" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="mt-4 flex items-center gap-3 bg-green-500 bg-opacity-20 border border-green-300 rounded-lg p-4 animate-slideIn">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-green-100">{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center gap-3 bg-red-500 bg-opacity-20 border border-red-300 rounded-lg p-4 animate-slideIn">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-red-100">{message}</p>
            </div>
          )}
        </form>

        <p className="text-center text-green-200 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
