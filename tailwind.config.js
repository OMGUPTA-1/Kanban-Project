/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",

      // Text
      "font-primary": "#0D062D",
      "font-light": "#787486",
      "font-warning": "#D58D49",
      "font-error": "#D8727D",
      "font-success": "#68B266",

      // Surface
      "surface-primary": "#5030E533",
      "surface-warning": "#DFA87433",
      "surface-error": "#D8727D1A",
      "surface-success": "#83C29D33",
      "surface-card": "#F5F5F5",
      "surface-card-dragged-background": "#5030E50F",
      "surface-selected": "#5030E514",
      "surface-thought-icon": "#FCD64AB2",

      // Main
      "main-primary": "#5030E5",
      "dragged-boundary": "#5030E596",

      // Divider
      "main-divider": "#DBDBDB",

      // Misc
      "icon-primary": "#292D32",
      "misc-1": "#7AC555",
      "misc-2": "#FFA500",
      "misc-3": "#E4CCFD",
      "misc-4": "#76A5EA",
      "misc-5": "#625F6D",
      "misc-6": "#E0E0E0",

      // Icons
      lamp: "#FBCB18",
    },
    extend: {},
  },
  plugins: [],
};
