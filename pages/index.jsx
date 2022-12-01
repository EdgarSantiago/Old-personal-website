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

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Street from "../components/Street/Street";
export default function Home() {
  return (
    <Layout>
      <Notebook />
      <Flex justify="center">
        <Box px={["25px", "50px"]} w="700px">
          <Heading
            mb={0}
            fontSize="26px"
            fontFamily="alien"
            fontWeight={"thin"}
          >
            Edgar Santiago
          </Heading>
          <Text mb={5}>Criador Digital ( Ciêntista / Artista / Dev )</Text>

          <Heading
            display="inline"
            borderBottom="3px  solid"
            borderColor="red.400"
            fontSize="26px"
            fontFamily="alien"
            fontWeight={"thin"}
          >
            Sobre mim
          </Heading>
          <Text style={{ textIndent: "1em" }} mt={2} mb={5}>
            Tenho 21 anos e estudo desenvolvimento web há 6 anos, atualmente
            estou cursando o último semestre de Ciência da Computação. Sou
            Especializado em frontend com TypeScript, utilizando NextJs com
            Tailwind, Bootstrap, Styled-Components, ChakraUi, etc. Também gosto
            de desenvolver APIs restful com NodeJs e MongoDB.
          </Text>

          <Heading
            display="inline"
            fontSize="26px"
            fontFamily="alien"
            fontWeight={"thin"}
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
            fontSize="26px"
            fontFamily="alien"
            fontWeight={"thin"}
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

      <Box position="relative" h="80vh">
        <Box
          zIndex="999"
          position="absolute"
          m="auto"
          top="0"
          bottom="0"
          right="0"
          left="0"
          width={["90%", "500px"]}
          height={"100%"}
          py="20px"
          textAlign="center"
          px={5}
        >
          <Heading
            mt="200px"
            p="20px"
            bg="#fafafa86"
            backdropFilter="auto"
            backdropBlur="2px"
            rounded="md"
            fontSize="26px"
            fontFamily="alien"
            fontWeight={"thin"}
            color={useColorModeValue("#fafafa", "#fafafa")}
            textShadow="1px 1px 0px #111111"
          >
            <Text color="red.400">Qualquer um pode</Text> escrever um código que
            o computador entenda.{" "}
            <Text color="red.400">Bons programadores </Text> escrevem códigos
            que os humanos entendam!
          </Heading>
        </Box>
        <Box h="100%">
          <Street />
        </Box>
      </Box>
    </Layout>
  );
}
