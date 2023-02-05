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
  { name: "GTA V", link: "" },
  { name: "GTA San Andreas", link: "" },
  { name: "Bully", link: "" },
  { name: "Code Vein", link: "" },
  { name: "Dark Souls I", link: "" },
  { name: "Dark Souls II", link: "" },
  { name: "Dark Souls III", link: "" },
  { name: "Elder Ring", link: "" },
  { name: "Zelda - Ocarina of Time", link: "" },
  { name: "The Legend of Zelda: Breath of the Wild", link: "" },
  { name: "Sekiro™: Shadows Die Twice", link: "" },
  { name: "Mega Man x8", link: "" },
  { name: "League of Legends", link: "" },
];

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function Album() {
  const [games, setGames] = useState([""]);

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
            px={[0, 4, 4, 5, 10]}
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
              <Link href={"/meusjogos"}>
                <BreadcrumbLink>Meus Jogos favoritos</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <OrderedList spacing={5} fontSize="2xl" py={5} px={[0, 4, 4, 5, 10]}>
          {games.map((game, i) => (
            <Link key={i} href="">
              <ListItem
                whileHover={{
                  scale: 1.01,
                }}
                display="block"
                as={motion.li}
              >
                {game.name}
              </ListItem>
            </Link>
          ))}
        </OrderedList>
      </Box>
    </>
  );
}
