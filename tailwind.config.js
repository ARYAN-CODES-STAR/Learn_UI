/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-secondary": "var(--text-secondary)",
      },
      fontFamily: {
        "desktop-body-body-1": "var(--desktop-body-body-1-font-family)",
        "desktop-body-body-1-m": "var(--desktop-body-body-1-m-font-family)",
        "desktop-button-normal": "var(--desktop-button-normal-font-family)",
      },
    },
  },
  plugins: [],
}

