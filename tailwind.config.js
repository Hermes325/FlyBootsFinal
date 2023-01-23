/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./styles/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "600px",
      },
      colors : {
        
      }
    },
  },
  plugins: [],
};
