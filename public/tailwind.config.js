/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "gelap": {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          primary: "#263643",
          secondary: "#FEFEFE",
          accent: "#cc444c",
        },
      },
      {
        "terang": {
          ...require("daisyui/src/colors/themes")["[data-theme=business]"],
          primary: "#FEFEFE",
          secondary: "#263643",
          accent: "#cc444c",
        }
      },
    ],
  },
};
