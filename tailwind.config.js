/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-green': '#2f8b57',
        'emerald': '#0b4f3b',
        'gold': '#D4AF37',
        'amber': '#b7791f',
        'ivory': '#FBF7F0',
        'charcoal': '#2b2b2b',
        'muted-olive': '#8a9a76',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
