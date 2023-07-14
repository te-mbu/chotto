/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-noto)", ...fontFamily.sans],
      },
      fontWeight: {
        semibold: '600',
      },
      maxWidth: {
        '8xl': '96rem'
       },
    },
  },
  plugins: [],
}
