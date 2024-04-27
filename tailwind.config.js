/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "0.8125rem",
        "11xl": "5rem",
        "12xl": "19px",
      },
      height: {
        "44": "2.75rem",
        "50": "3.125rem",
        "60": "3.75rem",
        "75": "4.6875rem",
        "78": "4.875rem",
        "42": "10.5625rem",
        "650": "40.625rem",
        "48.5": "58.75em",
        "720": "45rem",
        "780": "48.75rem",
        "830": "51.875rem",
        "840": "52.5rem",
        "850": "53.125rem"
      },
      width: {
        "98": "25rem",
        "258": "16.1699rem",
        "300": "18.75rem",
        "310": "19.3789rem",
        "520": "32.5rem",
      },
      maxWidth: {
        '98': '80%',
      },
      margin: {
        '15': "0.9375rem",
        '21': '1.3125rem',
        '30': "1.875rem",
        '33.5': '2.1rem',
        '53': "3.35rem",
        '66': "4.125rem",
      },
      padding: {
        '4.4': '1.125rem',
        '4.5': '1.4rem',
        '7.6': '1.85em',
        '50': '3.125rem',
        '60': '3.75rem',
        '120': '7.5rem',
        
      },
      lineHeight: {
        '15': '5.5rem',
        '17': '2.75rem',
        '14.8': '1.4844rem'
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
        '60': "60px",
        '80': "80px",
        '100': "100px",
      },
      gridTemplateColumns: {
        "16": "706.312px 720px",
      },
      zIndex: {
        "1": "1",
        '100': '100',
      }
    },
    letterSpacing: {
      extratight: '-3px',
      tightened: '-1.8px',
      extratighter: '-1px',
      tightest: '-0.065em',
    },
  },
  // plugins: [],
  plugins: [
    function ({ addUtilities }) {
      const new_UtilityClasses = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };

      addUtilities(new_UtilityClasses, ['responsive', 'hover']);
    },
  ],
}
