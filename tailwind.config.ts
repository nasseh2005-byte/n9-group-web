import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        n9: {
          black: "#050505",
          panel: "#101014",
          blue: "#0A84FF",
          gold: "#D6A84F",
          silver: "#F5F5F7"
        }
      },
      boxShadow: {
        glowBlue: "0 0 60px rgba(10, 132, 255, 0.24)",
        glowGold: "0 0 60px rgba(214, 168, 79, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
