import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors: {
        // 'primary' : "#154c79",
        'primary' : "purple",
        'main' : 'rgb(2 6 23);',
        'main-light' : 'rgba(2, 6, 23,0.6);',
        "secondary" : "#FCA311",
        "semi-white" : "#E5E5E5"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'biggest': '1.75rem',
        'h1': '1.5rem',
        'h2': '1.25rem',
        'h3': '1rem',
        'normal': '.938rem',
        'small': '.813rem',
        'smaller': '.75rem',
        'tiny': '.625rem',
       
      },
      fontWeight: {
        'medium': '500',
        'semibold': '600',
      },
      height : {
        'header' : '3.5rem'
      }
    },
  },
  plugins: [],
}
export default config
