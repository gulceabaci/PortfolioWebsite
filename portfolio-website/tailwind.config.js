/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Projenizin React dosyaları
    "./node_modules/flowbite-react/dist/esm/**/*.{js,jsx}", // Flowbite-React dosyaları
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Flowbite desteği için
  ],
};
