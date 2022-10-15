import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";

import FormBox from "./components/FormBox";

function App() {
  return (
    <ChakraProvider>
      <Box w="100%" h="100vh" bg="#343a40" color="#f9c74f">
        <FormBox />
      </Box>
    </ChakraProvider>
  );
}

export default App;
