/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add the path to your carousel component if it's not in pages or components.
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Include Flowbite as a plugin
  ],
}
