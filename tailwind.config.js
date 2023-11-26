/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5C61ED',
                secondary: '#36B79C',
                background2: '#2B2D34',
                background: '#202129',
                border: '#314648',
                msgBg: '#21272E'
              },
        },
    },
    plugins: [],
}