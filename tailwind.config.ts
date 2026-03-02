/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1E2028',
          200: '#171923',
          300: '#12151C'
        },
        light: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6'
        },
        accent: {
          primary: 'rgb(244, 244, 248)',
          secondary: '#f4f3f5',
          blue: '#60a5fa',
          green: '#4ade80',
          purple: '#a78bfa',
          orange: '#fb923c',
          pink: '#f472b6'
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};