/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#e2e2e2',
          lightHover: '#d5d5d5',
          dark: '#0c0c0c',
          darkCard: '#151515',
          darkBorder: '#242424',
          accent: '#2563eb', // subtle medical/academic blue accent
          muted: '#8e8e8e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
