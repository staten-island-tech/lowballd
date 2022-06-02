module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      animation: {
        blob: "blob 4s infinite"
      },

      keyframes: {
        blob: {
          "0%" : {
            transform: "scale(1)",
          },
          "33%" : {
            transform: "scale(1.1)",
          },
          "66%" : {
            transform: "scale(0.9)",
          },
          "100%" : {
            transform: "scale(1)",
          },
        },
      },

      flex: {
        '7': '7 7 0%'
      },
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
      fontFamily: {
        Spartan: ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('tw-elements/dist/plugin'),
    require('daisyui'),
    require('flowbite/plugin')
  ],
}