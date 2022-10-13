import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Banner from "../Banner";

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Navbar />
      <Banner />
      <Container
        py="0px"
        px="0px"
        maxW="100%"
        h="100%"
        bg={useColorModeValue("#fafafa", "#111111")}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
