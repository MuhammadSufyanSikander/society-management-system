/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['light'],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#fff',
        lightWhite: 'rgba(255, 255, 255, 0.7)',
        offWhite: 'rgba(255, 255, 255, 0.60)',
        lightgray: '#d2d2d2',
        overlay: 'rgba(0,0,0,0.7)',
        black: {
          50: 'rgba(77, 77, 77, 0.70)',
          100: '#4D4D4D',
        },
        silver: {
          100: '#EEECEC',
        },
        gray: {
          5: '#F6F6F6',
          10: '#EAEBEF',
          50: '#7E919F',
          100: '#181818',
          200: 'rgba(255, 255, 255, 0.6)',
          300: 'rgba(255, 255, 255, 0.5)',
          400: 'rgba(24, 24, 24, 0.6)',
          450: 'rgba(24, 24, 24, 0.75)',
          500: 'rgba(0, 0, 0, 0.05)',
          600: 'rgba(24, 24, 24, 0.9)',
          700: 'rgba(0, 0, 0, 0.1)',
          800: '#545454',
          900: '#1B1B1A',
          950: '#D8D8D8',
        },
        red: {
          10: 'rgba(247, 73, 83, 0.6)',
          50: '#F74953',
          100: '#ED4343',
          200: '#F54949',
          500: '#B23131',
        },
        yellow: {
          100: '#F7DD49',
        },
        blue: {
          10: '#F5F5F5',
          100: '#0693e3',
          200: '#2596be',
          400: '#214C74',
        },
        whitesmoke: '#f2f4f5',
        royalblue: '#0369d8',
        lightblue: '#E5F4FA',
        skyblue: '#81B4EC',
        faintBlue: 'rgba(3, 105, 216, 0.5)',
      },
      spacing: {},
      fontFamily: {
        'noto-sans': "'Noto Sans'",
      },
      borderRadius: {
        '3xs': '10px',
      },
      borderWidth: {
        '1/2': '1.5px',
      },
    },
    fontSize: {
      '49xl': '68px',
      '22xl': '41px',
      '35xl': '54px',
      smi: '13px',
      xs: '12px',
      inherit: 'inherit',
    },
    screens: {
      mq750: {
        raw: 'screen and (max-width: 750px)',
      },
      mq450: {
        raw: 'screen and (max-width: 450px)',
      },
    },
  },
  darkMode: 'dark',
  plugins: [nextui()],
}
