import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import Appledn from "../public/album/appledn.jpg";

const listImgs = [
  "/album/appledn.jpg",
  "/album/oldcyber.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDULEilAyxu5-qWqAqYWVBmhlh1QwF_Cn_g&usqp=CAU",
  "https://e1.pxfuel.com/desktop-wallpaper/494/237/desktop-wallpaper-cyberpunk-aesthetic-phone-cyberpunk-neon.jpg",
  "/album/oldcyber.jpg",
  "/album/oldcyber.jpg",
  "/album/oldcyber.jpg",
  "/album/oldcyber.jpg",
];

export default function Album() {
  const [album, setAlbum] = useState([""]);

  useEffect(() => {
    setAlbum(listImgs);
  }, []);

  return (
    <>
      <Flex justify="space-between" mb={3}>
        <Heading color="white">Album</Heading>
        <Link href="/">
          <Button>Voltar</Button>
        </Link>
      </Flex>
      <Box>
        <SimpleGrid columns={5} spacing={2}>
          {album.map((link) => (
            <Image borderRadius="md" shadow="md" src={link} width="100%" />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
