/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./themes/jack/layouts/**/*.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                tan: {
                    50: '#faf6f2',
                    100: '#f3ece1',
                    200: '#e7d7c1',
                    300: '#d7bc9a',
                    400: '#cda882',
                    500: '#ba8455',
                    600: '#ad7149',
                    700: '#905b3e',
                    800: '#744a38',
                    900: '#5f3e2f',
                    950: '#321e18',
                },
            },
            typography: ({ theme }) => ({
                amber: {
                    css: {
                        'font-weight': '400',
                        '--tw-prose-links': theme('colors.amber[600]'),
                        '--tw-prose-invert-links': theme('colors.amber[500]'),
                        'blockquote': { 
                            borderLeftWidth: '8px',
                            borderLeftColor: theme('colors.amber[400]'),
                            padding: '0.5rem',
                            backgroundColor: theme('colors.white'),
                        },
                        '.dark blockquote': { backgroundColor: theme('colors.slate.800') },
                        'blockquote p': { margin: '0', padding: '0', marginLeft: '2.5rem', fontWeight: '400'},
                        'blockquote p:first-of-type::before': {
                            content: '""',
                            position: 'absolute',
                            marginTop: '0.3rem',
                            marginLeft: '-2.2rem',
                            display: 'inline-block',
                            height: '1.5rem',
                            width: '1.5rem',
                            backgroundColor: theme('colors.amber[400]'),
                            mask: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>') no-repeat`,
                        },
                        'blockquote p:first-of-type::after': { content: 'none' },
                        'blockquote p:last-of-type::before': { content: 'none' },
                        'blockquote p:last-of-type::after': { content: 'none' },
                        'blockquote p:first-of-type': { marginTop: '0rem' },
                        'blockquote p.author::before': { content: '"— "' },
                        'blockquote p.author': { fontWeight: '300', fontStyle: 'italic', fontSize: '1.1rem'},
                        
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
