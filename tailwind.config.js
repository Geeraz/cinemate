module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1200px" },
      },
      colors: {
        darkbg: "#1E293B",
        grey1: "#ced4da",
        grey2: "#adb5bd",
        grey3: "#6c757d",
        grey4: "#495057",
        grey5: "#343a40",
        grey6: "#212529",
        prim: "#FFBF3F",
        blue: {
          850: "#1e40af",
        },
      },
    },
  },
  plugins: [],
};
