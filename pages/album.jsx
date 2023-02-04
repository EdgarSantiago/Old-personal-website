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
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
import { ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function Album() {
  const [album, setAlbum] = useState([""]);

  useEffect(() => {
    setAlbum(listImgs);
  }, []);

  return (
    <>
      <Box
        rounded="md"
        boxShadow={"10px 10px 0px #1111116b"}
        border="2px solid #111111"
        w="100%"
        h="100%"
        columns={[1, 1, 1, 2, 2]}
        spacing={5}
      >
        <Box p={2} borderBottom="2px solid #111111">
          <Breadcrumb
            px={10}
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
              <Link href={"/album"}>
                <BreadcrumbLink>Album</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box p={5}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 3, 750: 5, 900: 6, 1500: 8 }}
          >
            <Masonry gutter="10px">
              {album.map((image, i) => (
                <Zoom key={i}>
                  <Image
                    as={motion.img}
                    whileHover={{ scale: 1.02 }}
                    boxShadow={"5px 5px 0px #1111116b"}
                    objectFit={"cover"}
                    borderRadius="md"
                    src={image}
                  />
                </Zoom>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Box>
      </Box>
    </>
  );
}
