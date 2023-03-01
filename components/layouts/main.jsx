import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Banner from "../Banner";
import { useEffect, useState } from "react";
import ParticlesBack from "./ParticlesBack";
import Loading from "./Loading";
import MusicPlayer from "./MusicPlayer";

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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Meu nome é Edgar e sou desenvolvedor com experiência em ReactJS, NextJS e TypeScript. Sou formado em Ciência da Computação e estou sempre em busca de novos desafios e aprendizados na área de tecnologia."
      />
      <meta name="author" content="Edgar Santiago" />
      <meta
        name="keywords"
        content="edgar santiago, programador, dev, desenvolvedor, nextjs, criador de sites, edgarz, edgar, santiago"
      />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="twitter:title" content="Edgar Santiago" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Edgar Santiago" />
      <meta name="og:title" content="Edgar Santiago" />
      <meta property="og:type" content="website" />
      <Loading />
      {/*<ParticlesBack />*/}
      {children}
    </Container>
  );
};

export default Main;
