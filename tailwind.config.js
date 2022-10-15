/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    extend: {
      colors: {
        flavour1: '#F2B705',
        flavour2: '#F29F05',
        flavour3: '#F2C879',
        flavour4: '#F25C05',
        flavour5: '#592115',
      },
      keyframes: {
        currencyList: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(100%)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
