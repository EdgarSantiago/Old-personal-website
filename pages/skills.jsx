import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
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
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import Appledn from "../public/album/appledn.jpg";
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

export default function Skills() {
  const [skills, setSkills] = useState([""]);

  useEffect(() => {
    setSkills(listSkills);
  }, []);

  return (
    <Layout title="Habilidades">
      <Box
        rounded="md"
        border="2px solid #111111"
        w={["100%"]}
        mx="auto"
        minH="100%"
        columns={[1, 1, 1, 2, 2]}
        spacing={5}
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`linear-gradient(
      to right,
    #111111,
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
                <BreadcrumbLink>Minhas habilidades</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <SimpleGrid
          columns={[1, 1, 1, 2, 2]}
          gap={2}
          py={5}
          px={[0, 0, 0, 4, 8]}
          color="white"
        >
          {skills.map((skill, i) => (
            <Box
              _hover={{ backgroundColor: "#dccccc43" }}
              transition="ease-in-out 0.4s"
              fontSize={["14px", "18px"]}
              px={4}
              py={8}
              rounded="md"
              display="flex"
              gap={4}
              key={i}
              justifyContent="center"
              alignItems="center"
            >
              <Box>{skill.icon}</Box>
              <Box>{skill.name}</Box>
              <Box>{skill.time}</Box>
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
                <SliderThumb />
              </Slider>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
