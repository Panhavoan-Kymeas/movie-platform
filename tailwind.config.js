/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./homepage/**/*.{js,ts,jsx,tsx}",
    // Add the path to your carousel component if it's not in pages or components.
  ],
  theme: {
    extend: {
      spacing: {
        '20': '5rem', // Custom spacing for gap-20
      },
    },
  },
  safelist: [
    'gap-20',
  ],
  plugins: [
    require('flowbite/plugin') // Include Flowbite as a plugin
  ],
}
