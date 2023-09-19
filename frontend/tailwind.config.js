/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open sans', 'sans-serif'],
            },
            colors: {
              'quark-purple': '#3e3148',
              'lepton-lilac': '#9c7481',
              'boson-blue': '#141530',
              'neutrino-black': '#040404',
              'gluon-olive': '#14140c',
          },
        },
    },
    plugins: [],
};
