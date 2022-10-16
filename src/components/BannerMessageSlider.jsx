import React from "react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const BannerMessageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    minWidth: '280px',
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  return (
    <Box style={sliderStyles}>
      <Box style={slideStyles}></Box>
    </Box>
  );
};

export default BannerMessageSlider;
