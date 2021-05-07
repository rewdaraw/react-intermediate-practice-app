import * as React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Button colorScheme="blue">button</Button>
  </ChakraProvider>
);
