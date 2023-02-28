import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Banner from "../Banner";
import { useEffect, useState } from "react";
import ParticlesBack from "./ParticlesBack";
import Loading from "./Loading";

const Main = ({ children, router }) => {
  return (
    <Container
      as="main"
      py="50px"
      px={["5px", "10px", "15px", "20px", "40px", "80px"]}
      maxW="100%"
      height="100%"
      bg="white"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      backgroundSize="100% 100%"
      backgroundImage={`linear-gradient(
      to right,
    #010101,
      #000000
    ),url('')});`}
      position="relative"
    >
      <Loading />
      <ParticlesBack />
      {children}
    </Container>
  );
};

export default Main;
