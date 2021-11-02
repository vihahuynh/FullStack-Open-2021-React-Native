import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    nav: 30,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },

  fontFamily: Platform.select({
    android: "Roboto",
    ios: "Arial",
    default: "System",
  }),
};

export default theme;
