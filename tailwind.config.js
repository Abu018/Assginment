export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "375px", // Extra small devices starting from 375px
        sm: "480px", // Small devices starting from 480px
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2X large devices
      },
    },
  },
  plugins: [],
};
