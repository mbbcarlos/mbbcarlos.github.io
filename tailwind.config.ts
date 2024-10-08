import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#CCA894'
      },
      complementary: {
        DEFAULT: '#60371C'
      },
      dark: {
        DEFAULT:'#60371C'
      },
      accent: {
        DEFAULT: '#880f0c',
        dark: '#ff878b'
      },
      
      white: colors.white,
      blue: colors.blue,
      pink: colors.pink,
      purple: colors.purple,
      indigo: colors.indigo,
      gray: colors.gray

      
    },
    extend: {
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1.01)' },
          '50%': { transform: 'scale(0.7)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
