/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend:
     {},
    fontFamily: {
      subt:["Lobster","Pacifico"],
      title: ["Platypi", 'serif'],
      intro : ["Danfo", "serif"],
      bigfont: ["Orbitron", "sans-seri"]

    }

  },
  plugins: [
    flowbite.plugin(),
  ],
}

