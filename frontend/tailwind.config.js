/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '768px',
        md: '976px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        experiences: '#192234',
      },
      fontFamily: {
        logo: ['Caveat', 'cursive'],
      },
      borderRadius: {
        custom: '12px 45% 45% 12px',
        blob: '31% 69% 28% 72% / 61% 41% 59% 39%',
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            borderRadius: '31% 69% 28% 72% / 61% 41% 59% 39%'
          },
          '25%': {
            borderRadius: '40% 60% 35% 65% / 55% 45% 60% 40%'
          },
          '50%': {
            borderRadius: '35% 65% 40% 60% / 60% 50% 55% 45%'
          },
          '75%': {
            borderRadius: '28% 72% 31% 69% / 59% 39% 61% 41%'
          },
          '100%': {
            borderRadius: '31% 69% 28% 72% / 61% 41% 59% 39%'
          }
        }
      }
    },
  },
  plugins: [],
}

