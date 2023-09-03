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
        'primary' : '#6b21a8',  //purple-800
        'primary-light' : '#f1f5f9',  //purple-100
        'secondary' : '#c084fc', //purple-400
        'primary-dark' : '#0f172a', // slate-900
        'light-gray': '#14b8a6', //teal-500
        'light-background' :'#f8fafc', // slate-50
        'dark-background' :' #0f172a' , //slate-900
        'darker' :'#020617' ,  //slate-950
        'footer': '#3b0764', //purple-950
        'footer-dark': '#4a044e', //dark purple
        'shadow-dark': '#475569', 
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
