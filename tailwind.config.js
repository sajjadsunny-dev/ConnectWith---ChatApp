/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeColor': '#5F35F5',
        'headColor': '#11175D',
        'labelColor': 'rgba(17, 23, 93, .7)',
        'errorBg': 'rgba(0, 0, 0, 0.4)',
        'alertRed': '#FF0F0F',
        'successGreen': '#23D160',
      },
      maxWidth: {
        'container': '1320px',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Lobster', 'sans-serif'],

      },
      transitionTimingFunction: {
        'myTrans': 'all liner .4s'
      },
      boxShadow: {
        'navShadow': '0px 0px 20px 0px rgba(0, 0, 0, .05)',
        'cardShadow': '0px 0px 20px 5px rgba(63, 61, 86, 0.05)',
        'monialShadow': '0px 0px 20px 5px rgba(0, 19, 119, 0.05)',
        'homeCardShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'navAfterShadow': '-2px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        'uploadImg': '-2px 3px 30px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'registerBanner': "url('/images/login.jpg')",
        'loginBanner': "url('/images/login.jpg')",
        '404errorBg': "url('/images/404errorBg.png')",
      },
      screens: {
        'tablet': '740px',
        // => @media (min-width: 640px) { ... }
      },
      borderRadius: {
        'custom': '20px',
        '10px': '10px',
      },
      dropShadow: {
        'navIconDropShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
      },
      borderWidth: {
        '20': '20px',
        '22': '22px',
        '28': '28px',
      }
    },
  },
  plugins: [],
}