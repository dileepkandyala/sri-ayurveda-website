import { useEffect, useRef } from 'react';
import { fetchApi } from '../lib/api';

// phone.email exposes two separate widgets, each with its own script and global
// callback name. Both widgets can be mounted on the same page without conflicting.
const WIDGET_CONFIG = {
  phone: {
    scriptSrc: 'https://www.phone.email/sign_in_button_v1.js',
    containerClass: 'pe_signin_button',
    listenerName: 'phoneEmailListener',
  },
  email: {
    scriptSrc: 'https://www.phone.email/verify_email_v1.js',
    containerClass: 'pe_verify_email',
    listenerName: 'phoneEmailReceiver',
  },
};

// Renders a phone.email "Sign in with Phone" or "Verify Email" button.
// On successful verification, sends the one-time user_json_url to our backend
// (which fetches it server-side and confirms the verified contact) and reports
// the result via onVerified/onError.
export default function PhoneEmailWidget({ type, clientId, onVerified, onError }) {
  const containerRef = useRef(null);
  const config = WIDGET_CONFIG[type];

  useEffect(() => {
    const container = containerRef.current;
    if (!clientId || !container) {
      return undefined;
    }

    const previousListener = window[config.listenerName];
    window[config.listenerName] = async (userObj) => {
      try {
        const result = await fetchApi('/verify-contact', {
          method: 'POST',
          body: JSON.stringify({ type, user_json_url: userObj.user_json_url }),
        });
        onVerified?.(result.contact);
      } catch (error) {
        onError?.(error.message || 'Verification failed.');
      }
    };

    const setWidgetButtonLabel = () => {
      const labelId = type === 'phone' ? 'btn_ph_login_text' : 'btn_email_login_text';
      const buttonId = type === 'phone' ? 'btn_ph_login' : 'btn_email_login';
      const buttonLabel = type === 'phone' ? 'Phone' : 'Email';
      const label = container.querySelector(`#${labelId}`);
      const button = container.querySelector(`#${buttonId}`);

      if (label && label.textContent !== buttonLabel) {
        label.textContent = buttonLabel;
      }
      if (button && button.getAttribute('aria-label') !== buttonLabel) {
        button.setAttribute('aria-label', buttonLabel);
      }
    };
    const observer = new MutationObserver(() => {
      setWidgetButtonLabel();
    });
    observer.observe(container, { childList: true, subtree: true, characterData: true });
    setWidgetButtonLabel();

    const script = document.createElement('script');
    script.src = config.scriptSrc;
    script.async = true;
    script.onload = setWidgetButtonLabel;
    container.appendChild(script);

    return () => {
      observer.disconnect();
      window[config.listenerName] = previousListener;
      container.innerHTML = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, clientId]);

  if (!clientId) {
    return (
      <p className="text-sm text-red-700">
        {type === 'phone' ? 'Phone' : 'Email'} verification is not configured. Set the phone.email client ID.
      </p>
    );
  }

  return <div ref={containerRef} className={config.containerClass} data-client-id={clientId} />;
}
