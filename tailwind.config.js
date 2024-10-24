module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: '#383838',
        jet: '#3b3b3b',
        'eerie-black': '#212121',
        'smoky-black': '#121212',
        'orange-yellow': '#ffcc00',
        'light-gray': '#d4d4d4',
        'bittersweet-shimmer': '#bc4b51',
      },
      boxShadow: {
        'custom-1': '-4px 8px 24px rgba(0, 0, 0, 0.25)',
        'custom-2': '0 16px 30px rgba(0, 0, 0, 0.25)',
        'custom-3': '0 16px 40px rgba(0, 0, 0, 0.25)',
        'custom-4': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'custom-5': '0 24px 80px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
