/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        int: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.8125rem',
        '3xs': '0.863rem',
        '2sm': '0.9375rem',
        '4.5xl': '2.5rem',
      },
      colors: {
        gray: {
          900: '#1C1D20',
          800: '#232327',
          700: '#2B2B33',
          600: '#2E2E36',
          500: '#484853',
          400: '#555963',
          300: '#686C74',
          200: '#A5A9B7',
          100: '#E3E3E3',
        },
        white: {
          900: '#ECF0F6',
          800: '#E1E5EB',
          700: '#D4D7DC',
          600: '#C1C5C9',
          500: '#9494A4',
          400: '#888899',
        },
        blue: {
          600: '#265EED',
        },
        main: {
          blue: '#265EED',
          purple: '#8029EE',
          pink: '#EE29B7',
          red: '#F4385A',
          yellow: '#EE9329',
          green: '#29EE9B',
        },
      },
      spacing: {
        0.75: '0.1875rem',
        2.25: '0.5625rem',
        4.5: '1.125rem',
      },
      ringWidth: {
        1.5: '1.5px',
      },
      transitionDuration: {
        10: '10ms',
        40: '40ms',
        600: '600ms',
      },
    },
  },
  plugins: [],
};
