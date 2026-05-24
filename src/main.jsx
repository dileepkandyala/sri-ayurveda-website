import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import favicon from './images/favicon.JPG'
import sreeLakshmiImg from './images/SreeLakshmi.jpg'
import ayurvedicImg from './images/ayurvedic.jpg'

// Set favicon dynamically
const faviconLink = document.querySelector("link[rel='icon']")
if (faviconLink) {
  faviconLink.href = favicon
}

// Initialize Google Analytics only when configured
if (import.meta.env.VITE_GOOGLE_ANALYTICS_ID) {
  const gaScript = document.createElement('script')
  gaScript.async = true
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GOOGLE_ANALYTICS_ID}`
  document.head.appendChild(gaScript)

  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID, {
    anonymize_ip: true,
    allow_google_signals: true
  })
}

// Add JSON-LD Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.sriayurvedawellness.com",
  "name": "Sri Ayurveda Clinic & Panchakarma Center",
  "description": "Authentic Ayurvedic wellness center offering Panchakarma therapies, yoga, and personalized treatments by Dr. Shreelakshmi M.V., BAMS",
  "image": [
    sreeLakshmiImg,
    ayurvedicImg
  ],
  "url": "https://www.sriayurvedawellness.com",
  "telephone": "+91-8113452402",
  "email": "sriayurveda23@gmail.com",
  "areaServed": "IN",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#Hamsa complex, Magadi main road, near Sharath Memorial School",
    "addressLocality": "Ramanagara",
    "addressRegion": "Karnataka",
    "postalCode": "562159",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.7167",
    "longitude": "77.2833"
  },
  "sameAs": [
    "https://www.instagram.com/sri_ayurveda_clinic",
    "https://wa.me/917619529616"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "serviceType": "Ayurvedic Medicine",
  "medicalSpecialty": "Ayurveda",
  "founder": {
    "@type": "Person",
    "name": "Dr. Shreelakshmi M.V.",
    "jobTitle": "BAMS Certified Ayurvedic Doctor",
    "qualifications": "BAMS (Bachelor of Ayurveda Medicine and Surgery), Certified Yoga Professional"
  }
}

const script = document.createElement('script')
script.type = 'application/ld+json'
script.textContent = JSON.stringify(structuredData)
document.head.appendChild(script)

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
