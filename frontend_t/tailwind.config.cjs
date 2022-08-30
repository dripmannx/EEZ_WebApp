/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#282c34',
        'button-red': {
          DEFAULT: '#E60146',
          hover: { backgroundColor: '#FF3B6B' },
        },
        width: {
          98: '26rem',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: '#059669',

          secondary: '#f87171',

          accent: '#10b981',

          neutral: '#10b981',

          'base-100': '#f5f5f4',

          info: '#6EB8DE',

          success: '#29A875',

          warning: '#C18A0B',

          error: '#EB244F',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: false,
  },
};
