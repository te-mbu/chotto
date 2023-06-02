/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans JP', 'sans-serif'],
      },
      
      maxWidth: {
        '8xl': '96rem'
       },
    },
  },
  plugins: [],
}
