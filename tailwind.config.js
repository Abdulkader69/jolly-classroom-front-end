module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 2px 8px rgba(69, 71, 82, 0.08)',
      },
      colors: {
        BrandBlue: '#4A6FFF',
        BrandBlueDark: '#202E95',
        DarkGray: '#454752',
        PrimaryGray: '#676A7A',
        MidGray: '#9A9FB8',
        LightGray: '#FAFBFF',
        SoftGray: '#F0F1F5',
        Green: '#61CF9F',
        Yellow: '#FFC75E',
      },
      borderRadius: {
        head: '8px 8px 0px 0px',
      },
      maxWidth: {
        siteContainer: '1230px',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
