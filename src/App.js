import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";

import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

import FormBox from "./components/FormBox";
import BannerMessageSlider from "./components/BannerMessageSlider";

function App() {
  const slides = [
    { url: img1, title: "barra" },
    { url: img2, title: "barra2" },
    { url: img3, title: "pesos" },
  ];

  const containerStyles = {
    width: "400px",
    height: "320px",
    margin: "0 auto",
    padding: "20px",
    paddingTop: "30px",
  };

  return (
    <ChakraProvider>
      <Box w="100%" h="100vh" bg="#343a40" color="#f9c74f">
        <Box style={containerStyles}>
          <BannerMessageSlider slides={slides} />
        </Box>
        <FormBox />
      </Box>
    </ChakraProvider>
  );
}

export default App;
