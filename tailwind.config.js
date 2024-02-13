/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "320px", max: "374px" }, // Msmobile
        // => @media (min-width: 640px and max-width: 767px) { ... }

        sm: { min: "375px", max: "538px" }, // Lmobile
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "539px", max: "739px" }, // Mtablet
        // => @media (min-width: 640px and max-width: 767px) { ... }

        xm: { min: "740px", max: "1023px" }, // Ltablet
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" }, // Mlaptop
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "" }, // Llaptop
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
    },
  },
  plugins: [],
};
