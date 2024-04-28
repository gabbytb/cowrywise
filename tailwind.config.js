/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "0.8125rem",      // Usecase: top-bar.Link
        "11xl": "0.975rem",       // Usecase: menu-right.link
        "12xl": "5rem",           // Usecase: sections h-tags
        "13xl": "19px",
        "14xl": "0.9625rem",      // Usecase: nav-menu li button
        "15xl": "0.9375rem",
        "16xl": "7.5rem",         // UseCase: section-three
        
      },
      height: {
        "4.5": "1em",             // Usecase: Dropdown
        "7.8": "1.9531rem",
        "14.2": "3.6182rem",      // Usecase: nav-menu
        "18": "4.375rem",         // Usecase: nav-header

        "44": "2.75rem",
        "50": "3.125rem",
        "60": "3.75rem",          // Usecase: right-section--one
        
        "78": "4.875rem",
        "42": "10.5625rem",
      
        "48.5": "58.75em",        // Usecase: section-one
        "650": "40.625rem",       // Usecase: section-one slide
        "720": "45rem",
        "780": "48.75rem",
        "830": "51.875rem",
        "840": "52.5rem",         // UseCase: section-one div-2
        "850": "53.125rem",       // UseCase: section-one
        "870": "56.3945rem",      // UseCase: section-three
        "100": "1042.83px",       // UseCase: section-three bg-height
      },
      minHeight: {
        "98": "40.625rem",        // UseCase: left-section--one
      },
      maxHeight: {
        "98": "58.9141rem",       // UseCase: section-three
      },
      width: {
        "4.5": "1em",             // Usecase: Dropdown
        "9.6": "9.625rem",        // Usecase: Brand Logo

        "98": "25rem",            // UseCase: section-one
        "258": "16.1699rem",
        "300": "18.75rem",        // UseCase: section-two card-item
        // "310": "19.3789rem",
        "320": "30.875rem",       // UseCase: section-three cash-input
        "520": "32.5rem",
      },
      maxWidth: {
        '98': '80%',
        '99': '310.062px',
        "110": "54.5625rem",
      },
      margin: {
        '1.25': "0.3125rem",      // Usecase: Brand
        
        '15': "0.9375rem",
        '17': "1.05rem",
        '21': '1.3125rem',
        '30': "1.875rem",         // UseCase: left-section--one
        '33.5': '2.1rem',

        "34": "2.1263rem",
        "33.8": "2.5375rem",
        '53': "3.35rem",
        '66': "4.125rem",
      },
      padding: {
        '4.4': '1.125rem',
        '4.5': '1.4rem',
        '50': '3.125rem',         // UseCase: sections: 1, 2, 
        '60': '3.75rem',          // UseCase: right-section--one
        '120': '7.5rem',          // UseCase: section-two h5
        
      },
      lineHeight: {
        '16': "1.1",
        '15': '5.5rem',
        '17': '2.75rem',
        '14.8': '1.4844rem'
      },
      fontFamily: {
        "sans": ['"Open Sans", sans-serif'],
        "poppins": ["Poppins", "sans-serif"],
        "firma": ["BR Firma", "sans-serif"],
        'br-firma': ['BR Firma', 'apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        'dropdown': "url(/src/assets/icons/dropdown.svg)",
        'investments': "url(/src/assets/images/investments.svg)",
      },
      inset: {
        '3': '3px',
        '1.25': "0.3125rem",
        '2.25': "0.9375rem",
        '7.5': '1.875rem',      // Usecase: nav-header
        '19.2': '1.2em',        // Usecase: has-dropdown:after
        '60': "60px",           // UseCase: section-one
        '80': "80px",           // UseCase: section-one
        '100': "100px",
      },
      gridTemplateColumns: {
        "16": "706.312px 724px",  // UseCase: section-two
      },
      boxShadow: {
        "3xl": "0 8px 12px -1px rgba(0, 102, 245, .28)",
      },
      opacity: {
        '6': ".6",
      },
      zIndex: {
        "1": "1",               // UseCase: section-one
        '100': '100',           // UseCase: 
      }
    },
    letterSpacing: {
      tightened: '-1.8px',
      tighter: ".03em",
      tightest: '0.065em',
      
      extratight: '0.3px',
      extratighter: '-1px',
      extratightest: '3px',
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
