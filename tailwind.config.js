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
                mediumDarkGray: '#B7B7B7',
                mediumGray: 'CECECE',
                darkGray: '#9B9596',
                boxGray: '#EDEDED',
                accentColor: '#F4770A',
                darkBlue: '#2C3386',
                activeBlue: '#0015CE',
                lightBlue: '#021BFF',
                checkmarkGreen: '#7ACD6D',
                pastelBlue: '#EFF5FB',
                pastelYellow: '#FFF7EA',
                pastelPink: '#FFF5F3',
            },
            fontFamily: {
                poppins: 'Poppins',
                kumbhSans: 'Kumbh Sans',
            },
            screens: {
                xs: '400px',
                // Xtra small => @media (min-width: 400px) { ... }

                sm: '640px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                mb: '840px',
                // Menu Breakpoint => @media (min-width: 820px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1350px',
                // => @media (min-width: 1536px) { ... }
            },
        },
    },
    plugins: [],
}
