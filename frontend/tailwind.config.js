/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
import tailwindcssPlugin from 'tailwindcss/plugin';

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
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
    darkMode: 'class',
    plugins: [
        tailwindcssPlugin(({ addVariant }) => {
            addVariant('search-cancel', '&::-webkit-search-cancel-button');
        }),
        nextui(),
    ],
};
