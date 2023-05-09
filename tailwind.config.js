/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1ab69d",
        secondary: "#ee4a62",
      },
      boxShadow: {
        base: "0 6px 15px 0 rgba(0,0,0,.05)",
      },
    },
  },
  plugins: [],
};
