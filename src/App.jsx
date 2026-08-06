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
import Footer from './pages/Footer'
import logo from './images/logo.jpg'
import { AmbientMusicProvider, useAmbientMusic } from './lib/ambientMusic'

function Header() {
  const { isMusicPlaying, startAmbientMusic, stopAmbientMusic } = useAmbientMusic()

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
      <MenuNav />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
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
    <AmbientMusicProvider>
      <RouterProvider router={router} />
    </AmbientMusicProvider>
  )
}
