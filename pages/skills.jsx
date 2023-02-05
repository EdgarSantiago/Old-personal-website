import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import Appledn from "../public/album/appledn.jpg";

const listGames = [
  {
    name: "Elegy - Aiden Francis",
    link: "https://open.spotify.com/track/3UVgonk4NH31CULlJejqxM?si=aaa51fa928ac4811",
  },
  {
    name: "The flow - Harrison BDP",
    link: "https://open.spotify.com/track/6XEtddxACgaM3ykcvgoIAw?si=3729df28da574f99",
  },
  {
    name: "Donkey Therapy",
    link: "https://open.spotify.com/track/4W7S8MCpWe7yIljNlQWmac?si=bbed92a24a524377",
  },
  {
    name: "Ride - Rocksted and Bellatrix",
    link: "https://open.spotify.com/track/5kh0tYKfO0i8MXqpPiyE1b?si=9d629a969e6b45cf",
  },
  {
    name: "Porno - B from E",
    link: "https://open.spotify.com/track/19vpR4VM4kMiOkssMEEU0S?si=14d93af0749c432e",
  },
  {
    name: "Goodbye - Dj Cinema",
    link: "https://open.spotify.com/track/5Ips2rawNAfzMMEuPM0jsT?si=f573554f1f574f7f",
  },
  {
    name: "Thai Take Away ",
    link: "https://open.spotify.com/track/47jPtQs9LRiVLZG4t9GqTn?si=f5e2bef05a224620",
  },
  {
    name: "Freedom",
    link: "https://open.spotify.com/track/740cmV4DyAuleXnqBi6lrZ?si=7b36d8243c9743c1",
  },

  { name: "Freedom", link: "" },
  { name: "Freedom", link: "" },
  { name: "Freedom", link: "" },
  { name: "Freedom", link: "" },
  { name: "Freedom", link: "" },
  { name: "Freedom", link: "" },
];

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function Skills() {
  const [musics, setGames] = useState([""]);

  useEffect(() => {
    setGames(listGames);
  }, []);

  return (
    <>
      <Box
        rounded="md"
        boxShadow={"10px 10px 0px #1111116b"}
        border="2px solid #111111"
        w={["90%", "80%", "80%", "50%"]}
        mx="auto"
        h="100%"
        columns={[1, 1, 1, 2, 2]}
        spacing={5}
      >
        <Box p={2} borderBottom="2px solid #111111">
          <Breadcrumb
            px={[2, 4, 4, 5, 10]}
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
                <BreadcrumbLink>Minhas skills</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <OrderedList spacing={5} fontSize="2xl" py={5} px={[0, 4, 4, 5, 10]}>
          {musics.map((music, i) => (
            <ListItem
              whileHover={{
                scale: 1.01,
              }}
              display="block"
              as={motion.li}
              key={i}
            >
              <Link href={`${music.link}`} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  {music.name}
                </a>
              </Link>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
    </>
  );
}
