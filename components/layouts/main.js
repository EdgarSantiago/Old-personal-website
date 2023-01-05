import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Banner from "../Banner";
import { useEffect, useState } from "react";

const backgroundImages = [
  "https://rare-gallery.com/uploads/posts/547224-landscape-wallpaper.gif",
  "https://i.pinimg.com/originals/ab/26/01/ab26019d6a9def8082a9d5134a9e2d74.gif",
  "https://www.nawpic.com/media/2020/pixel-art-nawpic.webp",
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
      height={["100%", "100%", "100%", "100%", "100vh"]}
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
