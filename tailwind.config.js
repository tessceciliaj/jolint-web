/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                lightColor: '#FFFFFF',
                darkColor: '#000',
                extraLigth: '#E6E7E8',
                lightGray: '#B4B4B4',
                darkGray: '#9B9596',
                accentColor: '#F4770A',
                darkBlue: '#2C3386',
                activeBlue: '#0015CE',
                lightBlue: '#021BFF',
                checkmarkGreen: '#7ACD6D',
            },
            fontFamily: {
                poppins: 'Poppins',
                kumbhSans: 'Kumbh Sans',
            },
        },
    },
    plugins: [],
}
