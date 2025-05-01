// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        nodegrid: "radial-gradient(#6EE7B7 1px, transparent 1px)",
      },
      backgroundSize: {
        nodegrid: "20px 20px",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "-210" },
        },
      },
      animation: {
        dash: "dash 4s linear infinite",
      },
    },
  },
  plugins: [],
}
