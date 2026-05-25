/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'warm-white': '#F7F5F2',
                'graphite': '#111111',
                'muted-grey': '#6E6E73',
                'bronze': '#A67C52',
                'sage': '#7A8775',
                'light-grey': '#E5E5EA',
                'medium-grey': '#C7C7CC',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
            },
        },
    },
    plugins: [],
};
