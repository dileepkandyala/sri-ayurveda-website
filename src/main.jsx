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

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
