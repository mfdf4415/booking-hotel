/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#026ce4",
      light: "#595959",
      bold: "#1a1a1a",
      orange: "#FFB700",
      border: "#eceff3",
    }
  },
  plugins: [],
}