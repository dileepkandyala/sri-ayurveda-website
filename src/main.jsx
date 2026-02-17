import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import favicon from './images/favicon.JPG'

// Set favicon dynamically
const faviconLink = document.querySelector("link[rel='icon']")
if (faviconLink) {
  faviconLink.href = favicon
}

// Add JSON-LD Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sri Ayurveda Clinic & Panchakarma Center",
  "description": "Authentic Ayurvedic wellness center offering personalized treatments and Panchakarma therapy",
  "image": "https://www.sriayurvedawellness.com/src/images/SreeLakshmi.jpg",
  "url": "https://www.sriayurvedawellness.com",
  "telephone": "+91-8113452402",
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
    "https://www.instagram.com/sriayurveda",
    "https://wa.me/917619529616"
  ],
  "serviceType": "Ayurvedic Medicine",
  "priceRange": "$$"
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
