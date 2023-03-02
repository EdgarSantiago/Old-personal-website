import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  ListItem,
  OrderedList,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import {
  SiChakraui,
  SiPython,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";
import { DiMongodb, DiMysql } from "react-icons/di";
import { GiTargeting } from "react-icons/gi";

const listSkills = [
  {
    name: "Javascript",
    time: "5 anos",
    value: 100,
    icon: <IoLogoJavascript />,
  },
  {
    name: "Typescript",
    time: "3 anos",
    value: 80,
    icon: <SiTypescript />,
  },

  {
    name: "Html",
    time: "7 anos",
    value: 100,
    icon: <AiFillHtml5 />,
  },
  {
    name: "Css",
    time: "7 anos",
    value: 100,
    icon: <AiFillHtml5 />,
  },
  {
    name: "React Native",
    time: "2 anos",
    value: 100,
    icon: <FaReact />,
  },
  {
    name: "Reactjs",
    time: "5 anos",
    value: 100,
    icon: <FaReact />,
  },

  {
    name: "Nextjs",
    time: "2 anos",
    value: 100,
    icon: <TbBrandNextjs />,
  },

  {
    name: "Nodejs",
    time: "5 anos",
    value: 80,
    icon: <IoLogoNodejs />,
  },

  {
    name: "Bootstrap",
    time: "4 anos",
    value: 100,
    icon: <TbBrandBootstrap />,
  },
  {
    name: "Tailwind",
    time: "1 anos",
    value: 50,
    icon: <SiTailwindcss />,
  },
  {
    name: "ChakraUI",
    time: "2 anos",
    value: 100,
    icon: <SiChakraui />,
  },

  {
    name: "Python",
    time: "5 anos",
    value: 80,
    icon: <SiPython />,
  },

  {
    name: "Linux",
    time: "4 anos",
    value: 100,
    icon: <FcLinux />,
  },
  {
    name: "MongoDb",
    time: "4 anos",
    value: 100,
    icon: <DiMongodb />,
  },
  {
    name: "MySql",
    time: "4 anos",
    value: 60,
    icon: <DiMysql />,
  },
];

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandBootstrap, TbBrandNextjs } from "react-icons/tb";
import Layout from "../components/layouts/article";
import { MdGraphicEq } from "react-icons/md";

export default function MySkills() {
  return (
    <Layout title="Habilidades">
      <Box
        rounded="md"
        border="2px solid #111111"
        w={["100%"]}
        mx="auto"
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`linear-gradient(
      to right,
    #111111db,
      #111111
    ),url('')});`}
      >
        <Box rounded="md" bg="white" p={2} borderBottom="2px solid #111111">
          <Breadcrumb
            px={2}
            fontSize={"xl"}
            spacing="8px"
            separator={<ChevronRightIcon color="red.500" />}
          >
            <BreadcrumbItem>
              <Link href={"/"}>
                <BreadcrumbLink>Início</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link href={"/skills"}>
                <BreadcrumbLink>Habilidades</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Stack gap="10">
          <Center align="center" pt="50px" justifyItems={"center"} w="100%">
            <Box px={[4, 4, 8, 8, 8]}>
              <Avatar
                height="200px"
                w="200px"
                filter="grayscale(20%)"
                boxShadow="4px 4px 0px #260404b8"
                name="Edgar Santiago"
                src="https://cdn.discordapp.com/attachments/261379305915940864/1080307428538732654/327535741_601408554658313_7400600535912074363_n.jpg"
              />
              <Heading my={2} color="red.400">
                Edgar Santiago
              </Heading>

              <Heading fontSize="md" my={4} color="red.100">
                Desenvolvedor Full Stack
              </Heading>

              <Text
                w={["100%", "90%", "70%", "70%", "50%"]}
                textAlign="start"
                fontSize="lg"
                lineHeight={1.5}
                color="#e4e2e2"
              >
                Olá, seja bem-vindo(a) ao meu site! Sou formado em Ciência da
                computação com uma ampla experiência em desenvolvimento web.
                Minha paixão por computadores começou cedo, com apenas 7 anos de
                idade, e desde então, tenho me dedicado a aprender tudo o que
                posso sobre tecnologia.
                <br />
                <br />
                Hoje, sou especializado no uso de TypeScript, Next.js e React.js
                para desenvolver soluções web robustas e escaláveis. Além disso,
                tenho uma habilidade especial para aprender novas linguagens
                rapidamente, o que me permite me adaptar rapidamente a novos
                projetos e desafios. Também sou experiente em utilizar Node.js
                para criar servidores eficientes.
                <br />
                <br />
                Se você está procurando um desenvolvedor altamente qualificado e
                experiente, fique à vontade para entrar em contato comigo. Estou
                ansioso para trabalhar com você e ajudar a trazer sua visão para
                a realidade digital.
              </Text>
              <Link href="https://api.whatsapp.com/send?phone=5513997303537">
                <Button size={"lg"} mt={8} colorScheme="red">
                  Me contrate
                </Button>
              </Link>
            </Box>
          </Center>
          <Divider />
          <Box mt={4} textAlign="center">
            <Heading mb={8} fontSize="4xl" color="white">
              Habilidades
            </Heading>
            <SimpleGrid
              minH="80vh"
              mx="auto"
              w={["100%", "100%", "100%", "80%", "60%"]}
              columns={[1, 1, 1, 2, 3]}
              gap={["80px", "70px", "70px", "60px", "40px"]}
              py={5}
              color="white"
            >
              {listSkills.map((skill, i) => (
                <Box
                  transition="ease-in-out 0.4s"
                  fontSize={["14px", "18px"]}
                  rounded="md"
                  display="flex"
                  gap={4}
                  key={i}
                  justifyContent="center"
                  alignItems="center"
                  px={[4, 4, 4, 4, 0]}
                  py={4}
                >
                  <Box fontSize="30px">{skill.icon}</Box>
                  <Box>{skill.name}</Box>
                  <Slider aria-label="slider-ex-6" value={skill.value} w="40%">
                    <SliderMark
                      value={skill.value}
                      textAlign="center"
                      mt="-25px"
                      ml="-5"
                      w="12"
                      lineHeight={0.9}
                      fontSize="14px"
                    >
                      {skill.value}%
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack bg="#ff000084" />
                    </SliderTrack>
                    <SliderThumb bg="transparent" boxSize={6}>
                      <Box color="red.300" as={GiTargeting} />
                    </SliderThumb>
                  </Slider>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
}
