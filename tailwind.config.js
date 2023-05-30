/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      screens: {
        xl: '1440px',
        lg: '1200px',
        md: '960px',
        sm: '768px',
        xs: '560px',
        xm: '480px',
      },
      colors: {
        dark: {
          100: "#d5d5d7",
          200: "#abacaf",
          300: "#808288",
          400: "#565960",
          500: "#2c2f38",
          600: "#23262d",
          700: "#1a1c22",
          800: "#121316",
          900: "#09090b"
        },
        light: {
          100: "#f7f8f8",
          200: "#eff1f1",
          300: "#e6e9ea",
          400: "#dee2e3",
          500: "#d6dbdc",
          600: "#abafb0",
          700: "#808384",
          800: "#565858",
          900: "#2b2c2c"
        },
        accent: {
          100: "#ccdaff",
          200: "#99b6ff",
          300: "#6691ff",
          400: "#336dff",
          500: "#0048ff",
          600: "#003acc",
          700: "#002b99",
          800: "#001d66",
          900: "#000e33"
        },
        success: {
          100: "#ccf2d8",
          200: "#99e4b2",
          300: "#66d78b",
          400: "#33c965",
          500: "#00bc3e",
          600: "#009632",
          700: "#007125",
          800: "#004b19",
          900: "#00260c"
        },
        warning: {
          100: "#f2e9cc",
          200: "#e4d399",
          300: "#d7bc66",
          400: "#c9a633",
          500: "#bc9000",
          600: "#967300",
          700: "#715600",
          800: "#4b3a00",
          900: "#261d00"
        },
        failed: {
          100: "#f2ccdc",
          200: "#e499b9",
          300: "#d76697",
          400: "#c93374",
          500: "#bc0051",
          600: "#960041",
          700: "#710031",
          800: "#4b0020",
          900: "#260010"
        },
      }
    },
  },
  plugins: [],
}
