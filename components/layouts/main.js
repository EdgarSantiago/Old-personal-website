import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Banner from "../Banner";
import { useEffect, useState } from "react";

const backgroundImages = [
  "https://images.hdqwalls.com/download/a-neon-city-4m-2560x1700.jpg",
  "https://images.hdqwalls.com/download/colorful-neon-city-4k-tx-2560x1700.jpg",
  "https://images.hdqwalls.com/wallpapers/neon-lights-city-cyberpunk-4k-oh.jpg",
  "https://wallup.net/wp-content/uploads/2017/11/22/338668-cyberpunk-city-neon.jpg",
];

const Main = ({ children, router }) => {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    setCurrentImage(randomImage);
  }, [currentImage]);

  return (
    <Box
      as="main"
      height={["100%", "100%", "100vh", "100vh"]}
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      backgroundSize="cover"
      backgroundImage={`linear-gradient(
        to bottom,
      #111111c3,
        #111111c3
      ),url(${currentImage})});`}
    >
      <Container
        py="50px"
        px={["10px", "15px", "25px", "30px", "100px"]}
        maxW="100%"
        height="100%"
      >
        {children}
      </Container>
    </Box>
  );
};

export default Main;
