/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#292536',
          50: '#F6F5F8',
          100: '#ECEBF0',
          200: '#D7D5E0',
          300: '#B8B4C7',
          400: '#8F89A5',
          500: '#6E6788',
          600: '#544E6D',
          700: '#3F3A53',
          800: '#292536',
          900: '#1D1A27',
        },
        pastel: {
          pink: {
            light: '#FFF0F5',
            subtle: '#FFE4EE',
            DEFAULT: '#F4A7C3',
            medium: '#F8B4D9',
            deep: '#E87A9F',
          },
          lavender: {
            light: '#F8F6FF',
            subtle: '#EFEAFF',
            DEFAULT: '#C8B6F0',
            medium: '#B8A0E8',
            deep: '#9B7ED8',
          },
          blue: {
            light: '#F0F9FF',
            subtle: '#E0F2FE',
            DEFAULT: '#BAE6FD',
            medium: '#7DD3FC',
            deep: '#38BDF8',
          },
          yellow: {
            light: '#FEFCE8',
            subtle: '#FEF9C3',
            DEFAULT: '#FEF08A',
            medium: '#FDE047',
            deep: '#EAB308',
          },
          green: {
            light: '#F0FDF4',
            subtle: '#DCFCE7',
            DEFAULT: '#B8E6D0',
            medium: '#86EFAC',
            deep: '#4ADE80',
          },
          peach: '#FCD7D7',
          mint: '#B8E6D0',
          bg: '#FFF7FA',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Caveat"', '"Dancing Script"', 'cursive', 'sans-serif'],
        brand: ['"Dancing Script"', '"Caveat"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(244, 167, 195, 0.15)',
        'soft-lg': '0 20px 40px -10px rgba(200, 182, 240, 0.22)',
        'soft-xl': '0 25px 50px -12px rgba(41, 37, 54, 0.08)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'glass': '0 8px 32px 0 rgba(244, 167, 195, 0.12)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
