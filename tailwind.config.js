/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/library/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: ["Lato", "sans-serif"],
        heading: ["RocGrotesk", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      // TODO: Odstranit primary barvy
      primary: {
        400: "#818cf8",
        500: "#6366f1",
        DEFAULT: "#4f46e5",
        700: "#4338ca",
      },
      brand: {
        gray_dust: "#262626",
        violet: "#6D28D9",
        magenta_light: "#F0ABFC",
        red_salmon: "#FF4467",
        orange_beige: "FFE4D9",
        mustard_honey: "#FEC845",
        green_forest: "#0A9473",
        white: "#FFFFFF",
      },
      gray: {
        10: "#F4F4F4",
        20: "#E0E0E0",
        30: "#C6C6C6",
        40: "#A8A8A8",
        50: "#8D8D8D",
        60: "#6F6F6F",
        70: "#525252",
        80: "#393939",
        90: "#262626",
        100: "#161616",
      },
      violet: {
        10: "#F5F3FF",
        20: "#E3DCFF",
        30: "#CCBDFF",
        40: "#B398FF",
        50: "#9C73FF",
        60: "#8240FF",
        70: "#6A00E0",
        80: "#4B00A2",
        90: "#330073",
        100: "#1F004B",
      },
      magenta: {
        10: "#FCF0FF",
        20: "#F8D5FF",
        30: "#F3AEFF",
        40: "#EE79FF",
        50: "#E044F3",
        60: "#C000D2",
        70: "#91009E",
        80: "#670071",
        90: "#48004F",
        100: "#2D0032",
      },
      red: {
        10: "#FFF1F2",
        20: "#FFD6DA",
        30: "#FFB2BA",
        40: "#FF8291",
        50: "#FF4667",
        60: "#DD0045",
        70: "#A70031",
        80: "#780021",
        90: "#540014",
        100: "#36000A",
      },
      orange: {
        10: "#FFF1EC",
        20: "#FFD8C7",
        30: "#FFB68D",
        40: "#F29040",
        50: "#D47500",
        60: "#A85B00",
        70: "#7E4300",
        80: "#5A2E00",
        90: "#3E1E00",
        100: "#261000",
      },
      mustard: {
        10: "#FFF2E1",
        20: "#FADCAE",
        30: "#EDC063",
        40: "#CEA234",
        50: "#B08700",
        60: "#8B6A00",
        70: "#684E00",
        80: "#493600",
        90: "#322400",
        100: "#1E1500",
      },
      green: {
        10: "#CDFFEB",
        20: "#A2F0D3",
        30: "#5DDBB4",
        40: "#43BC97",
        50: "#00A07C",
        60: "#007E61",
        70: "#005E48",
        80: "#004231",
        90: "#002D20",
        100: "#001A12",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
