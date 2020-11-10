const theme = {
  colors: {
    primary: " #F9A109",
    secondary: "#FAFAFE",
    red: "#EB5757",
  },
  fontSizes: {
    primary: "1rem",
    xLarge: "24px",
    large: "18px",
    medium: "14px",
    small: "12px",
    xSmall: "10px;",
  },
  fontFamily: {
    primary: "Noto Sans, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  button: {
    style: {
      color: {
        primary: "#F9A109",
        secondary: "#C1C1C4",
        thirty: " #56CCF2",
        ghost: "transparent",
      },
      text: {
        primary: "white",
        secondary: "white",
        thirty: "red",
        ghost: "gray",
      },
      border: {
        primary: "none",
        secondary: "none",
        thirty: "1px solid #EB5757",
        ghost: "1px solid black",
      },
      size: {
        large: "120px",
        small: "90px",
      },
    },
  },
  textBox: {
    style: {
      size: {
        large: "550px",
        default: "300px",
        small: "110px",
        height: "45px",
      },
    },
  },
  spacers: {
    large: "45px",
  },
  radius: {
    primary: "24px",
    secondary: "12px",
    thirty: "6px",
  },
  mediaQueries: {
    bellow786: `only screen and (max-width: 768px)`,
  },
};

export default theme;
