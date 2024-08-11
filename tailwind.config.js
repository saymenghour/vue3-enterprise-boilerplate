import animate from 'tailwindcss-animate';
import primeui from 'tailwindcss-primeui';

/** @type {import("tailwindcss").Config} */
export default {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  plugins: [animate, primeui],
};