import { useState } from 'react';

const CONSENT_KEY = 'sri-ayurveda-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => {
    try {
      return localStorage.getItem(CONSENT_KEY) !== 'accepted';
    } catch {
      return true;
    }
  });

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {
      // Keep the banner usable when storage is unavailable.
    }
    setVisible(false);
  };

  return (
    <aside className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <div>
        <strong>Privacy choices</strong>
        <p>We use essential storage and privacy-conscious analytics to keep this site working. Read our <a href="/privacy-policy">Privacy Policy</a>.</p>
      </div>
      <button type="button" onClick={accept}>Accept</button>
    </aside>
  );
}
