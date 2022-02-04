module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  fontFamily: {
    worksans: ['"Work Sans"', 'sans-serif'],
    spectral: ['"Spectral"', 'serif'],
  },
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  variants: {
    extend: {
        // ...
       borderStyle: ['hover'],
    }
}
}
