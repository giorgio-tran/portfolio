/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'noire-black': '#171718',
        'noire-beige': '#faf7f2',
        'noire-darkbeige': '#a3a09b',
      },
    },
  },
  plugins: [],
};
