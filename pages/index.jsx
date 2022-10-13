import Layout from "../components/layouts/article";
import Banner from "../components/Banner";
import {
  Container,
  Box,
  Divider,
  Heading,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import ParallaxText, { AnimeRockersParallax } from "../components/ParallaxTxt";
import Notebook from "../components/Notebook";
import Gallery from "../components/gallery/Galery";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <Layout>
      <Notebook />
      <Flex justify="center">
        <Box px="50px" w="700px">
          <Heading mb={0}>Edgar Santiago</Heading>
          <Text mb={4}>Criador Digital ( Ciêntista / Artista / Dev )</Text>

          <Heading
            display="inline"
            fontSize="xl"
            borderBottom="3px  solid"
            borderColor="red.400"
          >
            Sobre mim
          </Heading>
          <Text style={{ textIndent: "1em" }} mt={2} mb={5}>
            Tenho 21 anos e estudo desenvolvimento web há 6 anos, atualmente
            estou cursando o último semestre de Ciência da Computação. Sou
            Especializado na criação de sites profissionais, que funcionam em
            celulares, tablets, pc, etc.
          </Text>

          <Heading
            display="inline"
            fontSize="xl"
            borderBottom="3px  solid"
            borderColor="red.400"
          >
            Bio
          </Heading>
          <UnorderedList mt={2} mb={5}>
            <ListItem>2001 Nasci em Guarujá (SP), Brasil</ListItem>
            <ListItem>
              2019 Iniciei Ciência da computação na UNIP - universidade
              paulista.
            </ListItem>
            <ListItem>2020 Trabalhando como freelancer</ListItem>
            <ListItem>2022 Desenvolvedor na ISTV - emissora de TV</ListItem>
          </UnorderedList>

          <Heading
            display="inline"
            fontSize="xl"
            borderBottom="3px  solid"
            borderColor="red.400"
          >
            I{" "}
            <Text
              display="inline"
              bgGradient="linear(to-l, #65b7e7, #e71919)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
            >
              ♥
            </Text>
          </Heading>
          <Text mt={2} mb={5} style={{ textIndent: "1em" }}>
            Desenvolvimento web, Música, e games.
          </Text>
        </Box>
      </Flex>

      <Box my="100px">
        <Gallery />
      </Box>
    </Layout>
  );
}
