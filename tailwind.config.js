/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2699FB',
                secondary: '#36B79C',
                background2: '#FFFFFF',
                background: '#F1F9FF',
                border: '#314648',
                msgBg: '#BCE0FD'
              },
        },
    },
    plugins: [],
}