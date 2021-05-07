import { extendTheme } from "@chakra-ui/react";

const globalStyle = {
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800",
      },
    },
  },
};

const theme = extendTheme(globalStyle);

export default theme;
