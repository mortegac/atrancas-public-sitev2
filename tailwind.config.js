/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['"Satoshi"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading-1': ['60px', '72px'],
        'heading-2': ['48px', '58px'],
        'heading-3': ['40px', '48px'],
        'heading-4': ['35px', '45px'],
        'heading-5': ['28px', '40px'],
        'heading-6': ['24px', '30px'],
        'custom-2xl': ['22px', '30px'],
        'custom-3xl': ['32px', '40px'],
      },
      // fontSize: {
      //   // Personalizar tamaños de texto
      //   'base': ['18px', { lineHeight: '1.5' }], // Cambiar el tamaño base
      // },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 