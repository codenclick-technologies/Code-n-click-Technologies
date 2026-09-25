/** @type {import('tailwindcss').Config} */
// Force rebuild
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            colors: {
                brand: {
                    navy: '#0A0F1C',
                    dark: '#111827',
                    charcoal: '#1E293B',
                    blue: '#2563EB',
                    electric: '#3B82F6',
                    lightBg: '#F7F8FA',
                    subtleBg: '#F3F5F8',
                    border: '#E2E8F0',
                    muted: '#64748B'
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
