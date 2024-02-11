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
        DEFAULT: '#f0b4d7'
      },
      white: colors.white,
      blue: colors.blue,
      pink: colors.pink,
      purple: colors.purple
      
    },
    extend: {
     
    },
  },
  plugins: [],
};
export default config;
