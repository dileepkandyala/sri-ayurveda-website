import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Panchakarma from './pages/Panchakarma'
import Contact from './pages/Contact'
import GalleryPage from './pages/GalleryPage'
import TreatmentsPage from './pages/TreatmentsPage'
import Footer from './pages/Footer'
import logo from './images/logo.png'

function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-tile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logo} alt="Sri Ayurveda Logo" className="brand-logo" />
          <div>
            <h1 className="brand">SRI AYURVEDA</h1>
            <p className="brand-sub">Restore health, renew vitality</p>
          </div>
        </Link>

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
          <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <a href="/#dosha-quiz" onClick={() => setOpen(false)}>Dosha Quiz</a>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/panchakarma" onClick={() => setOpen(false)}>Panchakarma</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/treatments" element={<TreatmentsPage/>} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/panchakarma" element={<Panchakarma/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
