/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "0.8125rem",
      },
      height: {
        "75": "75px"
      },
      margin: {
        '5': '5px',
        '30': "30px",
      },
      padding: {
        '4.5': '1.4em',
      },
      fontFamily: {
        "sans": ["Open Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "firma": ["BR Firma", "sans-serif"],
        // 'cw-br-firma': ['"CW BR Firma"', 'apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif'],
      },
      inset: {
        '3': '3px',
        '30': '30px',
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
