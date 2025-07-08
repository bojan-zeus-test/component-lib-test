/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          100: '#6366F1',
          200: '#A5B4FC',
          300: '#C7D2FE',
          400: '#E0E7FF',
          500: '#F3F4F6',
        },
        'of-gray': {
          100: '#1F2937',
          200: '#4B5563',
          300: '#6B7280',
          400: '#9CA3AF',
          500: '#F3F4F6',
        },
        'of-primary': {
          100: '#6366F1',
          200: '#A5B4FC',
          300: '#C7D2FE',
          400: '#E0E7FF',
          500: '#F3F4F6',
        },
        'of-accent': '#10B981',
        'wa-primary': '#25D366',
        'wa-primary-hover': '#128C7E',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      zIndex: {
        'widgetIndex': '9999',
      }
    },
  },
  plugins: [],
}