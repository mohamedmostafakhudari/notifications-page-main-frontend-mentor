/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
        "blue-100": "hsl(210, 60%, 98%)",
        "blue-200": "hsl(211, 68%, 94%)",
        "blue-300": "hsl(205, 33%, 90%)",
        "blue-500": "hsl(219, 14%, 63%)",
        "blue-700": "hsl(219, 12%, 42%)",
        "blue-900": "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
