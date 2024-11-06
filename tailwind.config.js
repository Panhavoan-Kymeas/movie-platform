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
        '20': '5rem',
      },
      screens: {
        xs: '300px',
        sm: '400px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      width: {
        '11/12': '91.666667%', // Custom width for 11/12
        '10/12': '83.333333%', // Optional: Custom width for 10/12
        '9/12': '75%',         // Optional: Custom width for 9/12
      },
    },
  },
  safelist: [
    'h-[75vh]',
    'mx-5',
    'gap-20',
    'lg:gap-20',
    'md:gap-16',
    'lg:w-xl',
    'md:w-lg',
    'sm:w-sm',
    'sm:w-6',
    'sm:gap:1',
    'pl-40',
    'xs:w-10/12',
    'sm:w-10/12',
    'md:w-9/12',
    'lg:w-8/12',
    'xl:w-7/12',
    'xs:grid-cols-2',
    'xs:h-1',
    'w-[10.25rem]',
    'bottom-[-7px]',
    'left-[3.5%]',
    'w-[5.5rem]',
    'opacity-[0.5]',
    'xl:w-[10.25rem]',
    'lg:w-[10.25rem]',
    'sm:w-[10.25rem]',
    'xs:w-[3.5rem]',
    'xs:text-xs',
    'xs:text-sm',
    'xs:py-1',
    'xs:text-[11px]',
    'xs:text-[15px]',
    'xs:text-[15px]',
    'sm:text-[11px]',
    'lg:text-[22px]',
    'md:text-[21px]',
    'xs:mx-auto',
    'lg:justify-start',
    'md:justify-start',
    'sm:justify-center',
    'lg:h-[75vh]',
    'md:h-[45vh]',
    'xs:h-[35vh]',
    'left-[20.5%]',
    'sm:text-[20px]',
    'sm:w-[8rem]',
    'sm:w-[4.5rem]',
    'md:w-[8rem]',
    'md:text-[13px]',
    'sm:text-[20px]',
    'lg:left-[5%]',
    'lg:left-[25%]',
    'md:left-[35%]',
    'md:left-[6%]',
    'lg:left-[26%]',
    'sm:left-[9%]',
    'sm:left-[220px]',
    'xs:left-[5.5%]',
    'xs:w-[4.5rem]',
    'xs:left-[54%]',
    'scrollbar-hide'
  ],
  plugins: [
    require('flowbite/plugin') // Include Flowbite as a plugin
  ],
}
