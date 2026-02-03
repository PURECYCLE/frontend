/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': '#4B3621',
        'coffee-light': 'rgba(75, 54, 33, 0.1)',
        'coffee-medium': 'rgba(75, 54, 33, 0.3)',
        'coffee-dark': 'rgba(75, 54, 33, 0.5)',
        'gold': '#E0C059',
        'gold-light': 'rgba(224, 192, 89, 0.1)',
        'gold-medium': 'rgba(224, 192, 89, 0.3)',
        'gold-dark': 'rgba(224, 192, 89, 0.5)',
        'cream': 'rgba(255, 255, 255, 0.9)',
        'cream-light': 'rgba(255, 255, 255, 0.1)',
        'cream-medium': 'rgba(255, 255, 255, 0.3)',
        'cream-dark': 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
