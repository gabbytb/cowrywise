/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    backgroundPosition: {
      'top-left': "-120% -120px",
    },
    extend: {
      colors: {
        'transparent-white': "hsla(0, 0%, 100%, .7)",
        'currency': "#6c82a3",
        'light-blue': "#0066f5",
        "dark-blue": "#082552",
        "light-black": "rgba(8, 37, 82, .07)",
        "light-white": "#fcfcfc",
        "dark-gray": "rgba(162, 227, 252, .4)",
      },
      fontSize: {
        "10xl": "0.8125rem",      // Usecase: top-bar.Link
        "11xl": "0.975rem",       // Usecase: menu-right.link
        "12xl": "5rem",           // Usecase: sections h-tags
        "13xl": "19px",
        "14xl": "0.9625rem",      // Usecase: nav-menu li button
        "15xl": "0.9375rem",
        "16xl": "7.5rem",         // UseCase: section-three
        "17xl": "2.4375rem",
        "18xl": "4rem",           // UseCase: section-four
        "19xl": "3.125rem",
        "20xl": "3.0375rem",
      },
      height: {
        "4.5": "1em",             // Usecase: Dropdown
        "7.8": "1.9531rem",
        "9.8": "9.7578rem",
        "14.2": "3.6182rem",      // Usecase: nav-menu
        "17.5": "2.5rem",
        "18": "4.375rem",         // Usecase: nav-header
        "50": "3.125rem",
        "60": "3.75rem",          // Usecase: right-section--one
        
        "42": "10.5625rem",
        "42.2": "14.5469rem",     // UseCase: section-four
        "42.5": "17.3691rem",     // UseCase: section-four
        "42.8": "20rem",
        "43": "20.3467rem",       // UseCase: section-three
        "43.5": "25rem",          // UseCase: section-four
        "44": "2.75rem",
        "48.5": "58.75em",        // Usecase: section-one
        "78": "4.875rem",
        "650": "40.625rem",       // Usecase: section-one slide
        "720": "45rem",
        "725": "47.5rem",
        "730": "47.9941rem",
        "780": "48.75rem",
        "830": "51.875rem",
        "840": "52.5rem",         // UseCase: section-one div-2
        "850": "53.125rem",       // UseCase: section-one
        "100": "1042.83px",       // UseCase: section-three bg-height
      },
      minHeight: {
        "42.8": "20rem",
        "98": "40.625rem",        // UseCase: left-section--one
        "99": "56.3945rem",       // UseCase: section-three
      },
      maxHeight: {
        "98": "58.9141rem",       // UseCase: section-three
      },
      width: {
        "4.5": "1em",             // Usecase: Dropdown
        "9.6": "9.625rem",        // Usecase: Brand Logo
        "9.8": "156.125px",
        "17.5": "2.5rem",
        "60": "3.75rem",
        "98": "25rem",            // UseCase: section-one
        "258": "16.1699rem",
        "300": "18.75rem",        // UseCase: section-two card-item
        // "310": "19.3789rem",
        "108": "30rem",
        "320": "30.875rem",       // UseCase: section-three cash-input
        "330": "47.375rem",
        "400": "50%",
        "500": "120%",
        "520": "32.5rem",
        "530": "50rem",
      },
      minWidth: {
        "9.8": "9.7578rem",
        "108": "30rem",
        "128": "19.9609rem",
      },
      maxWidth: {
        '97': "70%",
        '98': '80%',
        '99': '310.062px',
        "105": "41.6666666667%",   // UseCase: section four,five,
        "108": "30rem",
        "110": "54.5625rem",      
      },
      margin: {
        '1.25': "0.3125rem",      // Usecase: Brand
        "4.6": "1.85em",
        
        '15': "0.9375rem",
        '17': "1.05rem",
        '21': '1.3125rem',
        '30': "1.875rem",         // UseCase: left-section--one
        '33.5': '2.1rem',
        "33.8": "2.8rem",

        "34": "2.1263rem",
        "34.5": "2.5375rem",      // UseCase: section-three
        "35": "3.3125rem",        // UseCase: section-three
        '50': '3.125rem',
        '53': "3.35rem",
        '60': '3.75rem',
        '66': "4.125rem",
        "68": "6.8125rem",
      },
      padding: {
        '4.4': '1.125rem',
        '4.5': '1.4rem',
        "4.6": "1.85em",
        '50': '3.125rem',         // UseCase: sections: 1, 2, 
        '60': '3.75rem',          // UseCase: right-section--one
        '120': '7.5rem',          // UseCase: section-two h5
        
      },
      lineHeight: {
        '16': "1.1",
        "16.2": "1.55",
        '15': '5.5rem',
        '15.5': '5rem',
        "16.5": "3.9063rem",
        '17': '2.75rem',
        '14.8': '1.4844rem',
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
        "account": "url(/src/assets/images/bg-new-account.svg)",
      },
      inset: {
        '3': '3px',
        '1.25': "0.3125rem",
        '2.25': "0.9375rem",
        "6.6": "1.0625rem",
        "6.8": "1.125rem",
        '7.5': '1.875rem',      // Usecase: nav-header
        '19.2': '1.2em',        // Usecase: has-dropdown:after
        "50": "3.25rem",
        '60': "60px",           // UseCase: section-one
        '80': "80px",           // UseCase: section-one
        '100': "100px",
        "1/50": "1%",
        '4/12': "8%",
        "4/14": "28%",
        "4/15": "32%",
        "5/12": "56%",              
      },
      gridTemplateColumns: {
        "16": "706.312px 724px",  // UseCase: section-two
      },
      boxShadow: {
        "3xl": "0 8px 12px -1px rgba(0, 102, 245, .28)",
        "4xl": "1px 1px 2px rgba(8, 37, 82, .1)",
      },
      opacity: {
        '6': ".6",
        '8': "0.8",
      },
      zIndex: {
        "1": "1",               // UseCase: section-one
        '100': '100',           // UseCase: 
      },
      animation: {
        fade: 'fade 40s linear infinite',
      },
      keyframes: {
        fade:  {
          '0%': { 
            transform: 'translateZ(0)' 
          },
          '100%': { 
            transform: 'translate3d(-100%, 0, 0)' 
          },
        }
      },
    },
    letterSpacing: {
      tighter: ".03em",
      tightest: '0.065em',
      
      extratight: '0.3px',
      extratighter: '1.8px',
      extratightest: '3px',

      tightener: '1px',
      extratightener: "0.015em",
      extratightenest: "0.256rem",

      compressed: ".04em",
      extracompressed: "0.015em",
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
