/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // Primary color palette from Color Hunt
        primary: {
          darkest: '#030637',
          dark: '#3C0753',
          medium: '#720455',
          light: '#910A67',
        },
        // Semantic colors
        theme: {
          background: '#030637',
          surface: '#3C0753',
          accent: '#720455',
          highlight: '#910A67',
        },
      },
      fontFamily: {
        sans: [
          'InterVariable',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: ['InterDisplay', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(135deg, #030637 0%, #3C0753 50%, #720455 100%)',
        'gradient-accent': 'linear-gradient(135deg, #720455 0%, #910A67 100%)',
        'gradient-overlay':
          'linear-gradient(135deg, rgba(3, 6, 55, 0.9) 0%, rgba(114, 4, 85, 0.1) 100%)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(145, 10, 103, 0.3)',
        'glow-lg': '0 0 40px rgba(145, 10, 103, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(145, 10, 103, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(145, 10, 103, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
