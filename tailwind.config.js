/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep wine — salon luxury, pairs with champagne accent
        primary: {
          50: '#fbf6f6',
          100: '#f5e9e9',
          200: '#ebd4d4',
          300: '#dcb4b4',
          400: '#c88888',
          500: '#b35c5c',
          600: '#984848',
          700: '#7f3b3b',
          800: '#6a3333',
          900: '#5a2f2f',
          950: '#311717',
        },
        // Cool slate — clean UI neutrals
        secondary: {
          50: '#f8f9fb',
          100: '#f0f2f7',
          200: '#e1e4ed',
          300: '#c8ccdb',
          400: '#a5aabf',
          500: '#8288a3',
          600: '#6a6f8c',
          700: '#565a72',
          800: '#494c61',
          900: '#40424f',
          950: '#292a32',
        },
        // Champagne bronze — highlights, footer links, premium touches
        accent: {
          50: '#fbf9f5',
          100: '#f5eee2',
          200: '#ead9c1',
          300: '#d9bd9a',
          400: '#c59a6f',
          500: '#b8824f',
          600: '#a46d42',
          700: '#895738',
          800: '#704731',
          900: '#5d3c2b',
          950: '#351f15',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Boldonse', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(90, 47, 47, 0.08), 0 8px 32px -8px rgba(41, 42, 50, 0.06)',
        lift: '0 12px 40px -12px rgba(49, 23, 23, 0.15), 0 4px 16px -4px rgba(41, 42, 50, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
