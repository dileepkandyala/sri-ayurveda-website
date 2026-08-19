// Digital Marketing & Analytics Tracking
// Tracks user engagement, conversions, and key business metrics

export const trackEvent = (eventName, eventData = {}) => {
  let consentGiven = false;
  try {
    consentGiven = localStorage.getItem('sri-ayurveda-cookie-consent') === 'accepted';
  } catch {
    consentGiven = false;
  }

  if (!consentGiven) return;

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
  
  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
  }
  
  // Custom tracking
  console.log(`📊 Event tracked: ${eventName}`, eventData);
};

export const trackPageView = (pageName) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', {
    form_name: formName,
    timestamp: new Date().toISOString()
  });
};

export const trackConversion = (conversionType, value = null) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    timestamp: new Date().toISOString()
  });
};

export const trackPhoneClick = (phone) => {
  trackEvent('phone_click', {
    phone_number: phone
  });
};

export const trackWhatsAppClick = (number) => {
  trackEvent('whatsapp_click', {
    whatsapp_number: number
  });
};

export const trackServiceView = (serviceName) => {
  trackEvent('service_view', {
    service: serviceName
  });
};

export const trackBookingAttempt = () => {
  trackEvent('booking_attempt');
};

export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage
  });
};
