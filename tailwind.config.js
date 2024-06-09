/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        psicoletos: "#565766",
        pinky: "#9d8189"
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

