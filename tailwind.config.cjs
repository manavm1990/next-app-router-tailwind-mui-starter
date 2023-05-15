/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{ts,jsx,tsx}',
    './src/app/**/*.{ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
