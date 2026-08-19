import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Panchakarma from './pages/Panchakarma'
import Contact from './pages/Contact'
import GalleryPage from './pages/GalleryPage'
import TreatmentsPage from './pages/TreatmentsPage'
import Shop from './pages/Shop'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CommercePolicies from './pages/CommercePolicies'
import Footer from './pages/Footer'
import CookieConsent from './components/CookieConsent'
import logo from './images/logo.jpg'
import { AmbientMusicProvider, useAmbientMusic } from './lib/ambientMusic'
import { useCart, formatPrice, CartProvider } from './lib/cart'
import { fetchApi } from './lib/api'
import { sendShopWhatsAppMessage } from './lib/whatsapp'
import { ShoppingBag, Plus, Minus, X, Check, ArrowRight } from 'lucide-react'

function CartPanel({ onClose }) {
  const { items, itemCount, total, updateQuantity, clearCart } = useCart()
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [verified, setVerified] = useState(false)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  const [policyConsent, setPolicyConsent] = useState(false)

  const sendOtp = async () => {
    if (!/^\+?[0-9\s-]{10,15}$/.test(phone)) {
      setMessage('Enter a valid phone number to continue.')
      return
    }
    setBusy(true)
    setMessage('')
    try {
      const response = await fetchApi('/send-otp', {
        method: 'POST',
        body: JSON.stringify({ type: 'phone', contact: phone }),
      })
      if (!response.success) throw new Error(response.error || 'Unable to send OTP.')
      setOtpSent(true)
      setMessage(response.message || 'OTP sent to your phone.')
    } catch (error) {
      setMessage(error.message || 'Unable to send OTP right now.')
    } finally {
      setBusy(false)
    }
  }

  const verifyOtp = async () => {
    if (!otp) {
      setMessage('Enter the OTP sent to your phone.')
      return
    }
    setBusy(true)
    try {
      const response = await fetchApi('/verify-otp', {
        method: 'POST',
        body: JSON.stringify({ type: 'phone', contact: phone, otp }),
      })
      if (!response.success) throw new Error(response.error || 'Unable to verify OTP.')
      setVerified(true)
      setMessage('Phone verified. You can now continue to WhatsApp.')
    } catch (error) {
      setMessage(error.message || 'Unable to verify OTP.')
    } finally {
      setBusy(false)
    }
  }

  const checkout = () => {
    sendShopWhatsAppMessage(items, total, phone)
    clearCart()
    onClose()
  }

  return (
    <div className="cart-panel" role="dialog" aria-label="Shopping cart">
      <div className="cart-panel-header">
        <div><p className="cart-eyebrow">Your selection</p><h2>Wellness Cart</h2></div>
        <button type="button" className="cart-close" onClick={onClose} aria-label="Close cart"><X /></button>
      </div>
      {items.length === 0 ? (
        <p className="cart-empty">Your cart is waiting for a wellness essential.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.name}>
                <div><strong>{item.name}</strong><span>{formatPrice(item.amount)} each</span></div>
                <div className="cart-quantity">
                  <button type="button" onClick={() => updateQuantity(item.name, item.quantity - 1)} aria-label={`Remove one ${item.name}`}><Minus /></button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.name, item.quantity + 1)} aria-label={`Add one ${item.name}`}><Plus /></button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
          {!verified && <div className="cart-verification">
            <label htmlFor="cart-phone">Verify phone for checkout</label>
            <div className="cart-input-row"><input id="cart-phone" type="tel" value={phone} onChange={(event) => { setPhone(event.target.value); setVerified(false); }} placeholder="+91 XXXXXXXXXX" disabled={otpSent} /><button type="button" onClick={sendOtp} disabled={busy || otpSent}>{otpSent ? 'Sent' : 'Send OTP'}</button></div>
            {otpSent && <div className="cart-input-row"><input type="text" inputMode="numeric" maxLength={6} value={otp} onChange={(event) => setOtp(event.target.value)} placeholder="6-digit OTP" /><button type="button" onClick={verifyOtp} disabled={busy}>Verify</button></div>}
          </div>}
          {message && <p className="cart-message">{message}</p>}
          <label className="cart-policy-consent"><input type="checkbox" checked={policyConsent} onChange={(event) => setPolicyConsent(event.target.checked)} /> <span>I agree to the <a href="/shipping-delivery-policy">Shipping & Return Policy</a>.</span></label>
          <div className="cart-actions">
            <a href="/shop" className="cart-add-more" onClick={onClose}>Add more</a>
            <button type="button" className="cart-checkout" onClick={checkout} disabled={!verified || !policyConsent || busy}><Check /> Checkout on WhatsApp <ArrowRight /></button>
          </div>
          <p className="cart-count">{itemCount} item{itemCount === 1 ? '' : 's'} selected</p>
        </>
      )}
    </div>
  )
}

function Header() {
  const { isMusicPlaying, startAmbientMusic, stopAmbientMusic } = useAmbientMusic()
  const { itemCount } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-tile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logo} alt="Sri Ayurveda Logo" className="brand-logo" />
          <div className="brand-text">
            <h1 className="brand">SRI AYURVEDA</h1>
            <p className="brand-sub">Restore health, renew vitality</p>
          </div>
        </Link>

        <button
          type="button"
          className="music-toggle"
          aria-pressed={isMusicPlaying}
          aria-label={isMusicPlaying ? 'Stop calming music' : 'Play soothing music'}
          title={isMusicPlaying ? 'Stop calming music' : 'Play soothing music'}
          onClick={() => {
            if (isMusicPlaying) {
              stopAmbientMusic()
            } else {
              void startAmbientMusic()
            }
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {isMusicPlaying ? (
              <>
                <path d="M11 5 6 8H3v8h3l5 3V5z" />
                <path d="M15 8l6 8" />
                <path d="m21 8-6 8" />
              </>
            ) : (
              <>
                <path d="M11 5 6 8H3v8h3l5 3V5z" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M18.5 5.5a9 9 0 0 1 0 13" />
              </>
            )}
          </svg>
        </button>
        {itemCount > 0 && (
          <>
            <button type="button" className="cart-toggle" onClick={() => setCartOpen((open) => !open)} aria-label={`Open cart with ${itemCount} items`} aria-expanded={cartOpen}>
              <ShoppingBag aria-hidden="true" />
              <span className="cart-badge">{itemCount}</span>
            </button>
            {cartOpen && <CartPanel onClose={() => setCartOpen(false)} />}
          </>
        )}
      </div>
    </header>
  )
}

function MenuNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="menu-shell">
      <div className="container">
        <div className="menu-trigger-wrap">
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hamburger" aria-hidden="true" />
          </button>

          <nav className={`site-nav ${open ? 'open' : ''}`}>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/treatments" onClick={() => setOpen(false)}>Treatments</Link>
            <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <a href="/#dosha-quiz" onClick={() => setOpen(false)}>Dosha Quiz</a>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/panchakarma" onClick={() => setOpen(false)}>Panchakarma</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

function Layout() {
  return (
    <>
      <Header />
      <main className="container site-main">
        <MenuNav />
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'treatments', element: <TreatmentsPage /> },
        { path: 'shop', element: <Shop /> },
        { path: 'gallery', element: <GalleryPage /> },
        { path: 'about', element: <About /> },
        { path: 'panchakarma', element: <Panchakarma /> },
        { path: 'contact', element: <Contact /> },
        { path: 'terms-of-service', element: <TermsOfService /> },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },
        { path: 'refund-cancellation-policy', element: <CommercePolicies path="/refund-cancellation-policy" /> },
        { path: 'shipping-delivery-policy', element: <CommercePolicies path="/shipping-delivery-policy" /> },
        { path: 'disclaimer-policy', element: <CommercePolicies path="/disclaimer-policy" /> },
        { path: 'grievance-redressal', element: <CommercePolicies path="/grievance-redressal" /> },
        { path: 'website-terms-of-use', element: <CommercePolicies path="/website-terms-of-use" /> },
        { path: 'telemedicine-policy', element: <CommercePolicies path="/telemedicine-policy" /> },
        { path: 'cookie-policy', element: <CommercePolicies path="/cookie-policy" /> },
        { path: 'data-retention-security-policy', element: <CommercePolicies path="/data-retention-security-policy" /> },
        { path: 'patient-rights-responsibilities', element: <CommercePolicies path="/patient-rights-responsibilities" /> },
        { path: 'patient-confidentiality-policy', element: <CommercePolicies path="/patient-confidentiality-policy" /> },
        { path: 'emergency-clinical-limitations', element: <CommercePolicies path="/emergency-clinical-limitations" /> },
        { path: 'ai-chatbot-disclaimer', element: <CommercePolicies path="/ai-chatbot-disclaimer" /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
)

export default function App(){
  return (
    <CartProvider>
      <AmbientMusicProvider>
        <RouterProvider router={router} />
      </AmbientMusicProvider>
    </CartProvider>
  )
}
