import {
  Box,
  Button,
  Flex,
  Grid,
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
  "https://media0.giphy.com/media/786qVQHXMJhnO/giphy.webp?cid=ecf05e47q9fzwlkpy6xwn74yeuf3d4m4nqd70odjb91zr2oy&rid=giphy.webp&ct=g",
  "https://media4.giphy.com/media/w6JyQiYum7Qbu/200.webp?cid=ecf05e47g7y21d41fhsiaujr5y8q25gydl2i9hvho41i4ezr&rid=200.webp&ct=g",
  "https://media3.giphy.com/media/piFGZ3Vxk2NHOAPgE3/200.webp?cid=ecf05e47yw0idv8fesn9i08sz09kd9ib7368tzhxdhafwtjy&rid=200.webp&ct=g",
  "https://media3.giphy.com/media/60rGqeykp8O597gBNO/200w.webp?cid=ecf05e47lt0i03m0bjjj3zj30tqayqj5jbrxo431b0qbfc91&rid=200w.webp&ct=g",
  "https://media3.giphy.com/media/de5bARu0SsXiU/200w.webp?cid=ecf05e47rbt1zz5f7vffna2kjykiica435uyo29aijnl1fmf&rid=200w.webp&ct=g",
  "https://media0.giphy.com/media/3ohc10GA6j4XrLWzZK/200w.webp?cid=ecf05e47o8u2xy6rc1xt4r6s9yksoigt3iyn2x3p6yjv7g32&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/ienpDYR5qaBTG/200w.webp?cid=ecf05e47conceqf6de7knsh59w5mlriq7jcqsvjymcoac5j9&rid=200w.webp&ct=g",
  "https://media1.giphy.com/media/IHvFjYbR4z6zb4Z1f5/200w.webp?cid=ecf05e475xxquhkxlbekfguaemwopw58ibcn7pxxhsckdk6r&rid=200w.webp&ct=g",
  "https://media4.giphy.com/media/ww2JZIz7QxvrmnhFeE/giphy.webp?cid=ecf05e47pievi7lsqrf78tpln8zu90rseyh28qoerwdnldkc&rid=giphy.webp&ct=g",
  "https://media0.giphy.com/media/4N5ddOOJJ7gtKTgNac/200.webp?cid=ecf05e47i5c1tmc30w4t9nzktuiag4grmpa58ob6t4qbjank&rid=200.webp&ct=g",
  "https://media2.giphy.com/media/guufsF0Az3Lpu/200.webp?cid=ecf05e47y5x8rxhjkn79zqmso63fs5qok9nsj8mbpfqewrr3&rid=200.webp&ct=g",
  "https://media2.giphy.com/media/JTjiT1dvFdSpi/200.webp?cid=ecf05e47pm4lq50mtw3eu2e2a6qixsdlh5j5tjb7fcpomocw&rid=200.webp&ct=g",
];

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Album() {
  const [album, setAlbum] = useState([""]);

  useEffect(() => {
    setAlbum(listImgs);
  }, []);

  return (
    <>
      <Box
        bg="#161515"
        rounded="md"
        border="1px solid white"
        h="100%"
        columns={[1, 1, 1, 2, 2]}
        spacing={5}
        p={10}
        mx={["2%", "5%", "10%", "15%", "20%"]}
      >
        <Flex alignItems={"center"} justify="space-between" mb={5}>
          <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "4xl"]} color="white">
            Album
          </Heading>
          <Link href="/">
            <Button shadow="md" colorScheme={"purple"}>
              Voltar
            </Button>
          </Link>
        </Flex>
        <Box>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="10px">
              {album.map((image, i) => (
                <Image
                  key={i}
                  objectFit={"cover"}
                  borderRadius="md"
                  src={image}
                  loading="lazy"
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Box>
        <Flex alignItems={"center"} justify="space-between" mt={8}>
          <Link href="/">
            <Heading
              _hover={{
                cursor: "pointer",
                color: "purple",
              }}
              fontSize={["2xl", "3xl", "3xl", "3xl", "4xl"]}
              color="white"
            >
              Voltar
            </Heading>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
