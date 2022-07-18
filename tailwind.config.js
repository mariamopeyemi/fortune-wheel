module.exports = {
  
  content: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
      scrollbar: ['rounded']
  },
  theme: {
    extend: {
      colors: {
        "my-border-color--1": "#DFE4E8",
        primary: "#110066",

        "primary-lightest-2": "#E1F7FF",
        'card-hover': '#F0FBFF',

        // Black color scheme
        "black-default": "#0A1F44",
        "black-light": "#818FA3",
        "black-lighter": "#C1C7D1",
        "black-lightest-2": "#E5E9EC",
        "black-lightest-1": "#F3F4F6",

        "hover-color--1": "#F9FAFA",

        //Gray color scheme
        "gray-darker": "#60646A",
        "gray-dark": "#90979E",
        "gray-default": "#C0C9D2",
        "gray-light": "#DFE4E8",
        "gray-lighter": "#F0F2F4",
        "gray-lightest-2": "#F9FAFA",
        "gray-lightest-1": "#FCFCFD",

        //success colors
        "success-default": "#3CC13B",

        //warn
        "warn-default": "#FFBB38",
        
        // accent
        "accent-default":'#FA9330',

        // accent
        "green-accent":'#14B363',

        //error
        "error-default": "#F03738",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "940px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};

