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
      },
      maxWidth: {
        'container': '1320px',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif']

      },
      transitionTimingFunction: {
        'myTrans': 'all liner .4s'
      },
      boxShadow: {
        'navShadow': '0px 0px 20px 0px rgba(0, 0, 0, .05)',
        'cardShadow': '0px 0px 20px 5px rgba(63, 61, 86, 0.05)',
        'monialShadow': '0px 0px 20px 5px rgba(0, 19, 119, 0.05)',
      },
      backgroundImage: {
        'registerBanner': "url('images/register.jpg')",
        'loginBanner': "url('images/login.jpg')",
      }
    },
  },
  plugins: [],
}