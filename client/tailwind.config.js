/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    animation: {
    'slide-in': 'slide-in 0.3s ease-out',
    'progress': 'progress-bar linear forwards',
  },
  keyframes: {
    'slide-in': {
      '0%': { opacity: 0, transform: 'translateX(100%)' },
      '100%': { opacity: 1, transform: 'translateX(0)' },
    },
    'progress-bar': {
      '0%': { width: '100%' },
      '100%': { width: '0%' },
    },
  },
    },
  plugins: [],
}
