/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'xs':{'min':'300px','max':'500px'}
      },
      colors:{
        primary:"#141416",
        secondary:"#9c27b0",
        textColor:"#ccd3d9"
      },
      animation: {
        'bounce-up-down': 'bounce-up-down 5s infinite',
      },
      keyframes: {
        'bounce-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}

