/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold-light": "hsl(var(--gold-light))",
        "gold-dark": "hsl(var(--gold-dark))",
        primary: "hsl(var(--primary))",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, hsl(var(--gold-light)), hsl(var(--primary)), hsl(var(--gold-dark)))",
      },
    },
  },

  plugins: [],
};
