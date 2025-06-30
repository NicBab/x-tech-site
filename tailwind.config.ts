/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './style/**/*.{js,ts,jsx,tsx}', 
    './styles/**/*.{js,ts,jsx,tsx}',
    './globals.css',
  ],
  safelist: [
  // === Common Utilities ===
  'max-w-[100vw]', 'w-full', 'w-[200px]',
  'py-2', 'px-2', 'px-2', 'mb-4', 'm-4',
  'font-poppins', 'font-Amatic_SC',
  'font-medium', 'font-semibold', 'font-normal',
  'text-primary', 'text-dimWhite', 'text-black',
  'text-[12px]', 'text-[14px]', 'text-[18px]', 'text-[40px]', 'text-[48px]', 'text-[80px]',
  'leading-[25px]', 'leading-[35px]', 'leading-[40px]', 'leading-[50px]', 'leading-[85px]',
  'indent-5',

  // === Layout ===
  'flex', 'flex-col', 'flex-row', 'flex-1',
  'justify-center', 'items-center', 'items-start', 'items-end',
  'self-end', 'relative', 'mt-3', 'mt-10', 'mr-0', 'ml-0', 'md:ml-10', 'md:mr-10', 'xs:ml-5',

  // === Spacing ===
  'p-5', 'm-5', 'sm:px-16', 'px-6', 'sm:py-16', 'py-6', 'sm:py-12', 'py-4',
  'sm:mx-16', 'mx-6', 'sm:my-16', 'my-6',

  // === Gradients & Custom Classes from globals.css ===
  'bg-orange-gradient', 'bg-orange__gradient',
  'orange-text-gradient', 'purple-text-gradient', 'blue-text-gradient',
  'bg-purple-gradient', 'bg-black-gradient', 'bg-black-gradient-2', 'reverse-black-gradient',
  'purple__gradient', 'white__gradient', 'blue__gradient',

  // === Borders & Hover ===
  'border', 'border-1', 'border-orange', 'border-iconPurple',
  'hover:border-blueText', 'hover:text-blueText',

  // === Display & Z-Index ===
  'z-[1]', 'z-[0]',

  // === Round & Clip ===
  'rounded-full',

  // === Responsive Screens ===
  'xs:text-[48px]', 'xs:leading-[85px]', 'md:text-[12px]',

  // === Animation & Sidebar ===
  'sidebar', 'transform', 'hover:transform', 'scale-[1.01]',
],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: "#00040f",
        primary: "#1a1a1a",
        secondary: "#f97316",
        orange: "#fb923c",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimPurple: "rgba(106, 23, 250, 0.122)",
        iconPurple: "#4b0082",
        blueText: "#33bbcf",
      },
      backgroundImage: {
        'black-gradient': 'linear-gradient(180deg, #000 0%, #222 100%)',
        'binary-tunnel': "url('/binary_tunnel.png')",
        'CTA-texture': "url('/modern-tech-binary.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}