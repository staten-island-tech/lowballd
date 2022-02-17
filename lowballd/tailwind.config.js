module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  fontFamily: {
    worksans: ['"Work Sans"', 'sans-serif'],
    spectral: ['"Spectral"', 'serif'],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin'),
    require('daisyui'),
  ],
}