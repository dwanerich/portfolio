/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        lightGray: 'hsl(0, 0%, 98%)',
        grayishBlue: 'hsl(227, 12%, 61%)',
        lightGray: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
