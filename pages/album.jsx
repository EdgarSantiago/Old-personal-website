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
import { useEffect, useLayoutEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import Appledn from "../public/album/appledn.jpg";

const listImgs = [
  "/album/appledn.jpg",
  "https://media0.giphy.com/media/786qVQHXMJhnO/giphy.webp?cid=ecf05e47q9fzwlkpy6xwn74yeuf3d4m4nqd70odjb91zr2oy&rid=giphy.webp&ct=g",
  "https://media4.giphy.com/media/w6JyQiYum7Qbu/200.webp?cid=ecf05e47g7y21d41fhsiaujr5y8q25gydl2i9hvho41i4ezr&rid=200.webp&ct=g",
  "https://media3.giphy.com/media/60rGqeykp8O597gBNO/200w.webp?cid=ecf05e47lt0i03m0bjjj3zj30tqayqj5jbrxo431b0qbfc91&rid=200w.webp&ct=g",
  "https://media3.giphy.com/media/de5bARu0SsXiU/200w.webp?cid=ecf05e47rbt1zz5f7vffna2kjykiica435uyo29aijnl1fmf&rid=200w.webp&ct=g",
  "https://media0.giphy.com/media/3ohc10GA6j4XrLWzZK/200w.webp?cid=ecf05e47o8u2xy6rc1xt4r6s9yksoigt3iyn2x3p6yjv7g32&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/ienpDYR5qaBTG/200w.webp?cid=ecf05e47conceqf6de7knsh59w5mlriq7jcqsvjymcoac5j9&rid=200w.webp&ct=g",
  "https://media0.giphy.com/media/4N5ddOOJJ7gtKTgNac/200.webp?cid=ecf05e47i5c1tmc30w4t9nzktuiag4grmpa58ob6t4qbjank&rid=200.webp&ct=g",
  "https://media2.giphy.com/media/JTjiT1dvFdSpi/200.webp?cid=ecf05e47pm4lq50mtw3eu2e2a6qixsdlh5j5tjb7fcpomocw&rid=200.webp&ct=g",
  "https://media0.giphy.com/media/11BbGyhVmk4iLS/200.webp?cid=ecf05e47ui7iq4l39a3illxfvy2egtwa67askhaz6apxykg9&rid=200.webp&ct=g",
  "https://media2.giphy.com/media/MC6eSuC3yypCU/200w.webp?cid=ecf05e478e2vq5ulerw7km7ei5ms7c2fc6oqyumcgwo6xtim&rid=200w.webp&ct=g",
  "https://media1.giphy.com/media/wwg1suUiTbCY8H8vIA/200w.webp?cid=ecf05e47fkgompipw2vx77cis1atfi3eo8j4gttbva75cq7x&rid=200w.webp&ct=g",
  "https://media4.giphy.com/media/8vHSt3vau0pFh0ZemM/100.webp?cid=ecf05e47b79xoqnw8uqyq6552ek0rqgxtmbrutczx7iopmzk&rid=100.webp&ct=g",
  "https://media2.giphy.com/media/ifsSK9lb3ewht0uulF/giphy.gif?cid=ecf05e47flwh23aymtdmu6f31iwg26du27u36gjw0bce9a2c&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/niED81KtJFWhmvJ27o/200w.webp?cid=ecf05e479ulbkful2y651qkh62cxc3ovxi59aip9n3b3xfi6&rid=200w.webp&ct=g",
  "https://media4.giphy.com/media/y0NFayaBeiWEU/giphy.gif?cid=ecf05e47undclvbh9ssn3xnz01u3f25loiz9rd2qr778li1o&rid=giphy.gif&ct=g",
];

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Layout from "../components/layouts/article";

export default function Album() {
  const [album, setAlbum] = useState([""]);

  useEffect(() => {
    setAlbum(listImgs);
  }, []);

  return (
    <>
      <Layout title="Album">
        <Box
          rounded="md"
          bg="#111111"
          w="100%"
          minH="100vh"
          columns={[1, 1, 1, 2, 2]}
          spacing={5}
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
                <Link href={"/album"}>
                  <BreadcrumbLink>Album</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box p={5}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 750: 5, 900: 6, 1500: 6 }}
            >
              <Masonry gutter="10px">
                {album.map((image, i) => (
                  <Zoom key={i} ZoomContent={CustomZoomContent}>
                    <Image
                      w="100%"
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
      </Layout>
    </>
  );
}

const CustomZoomContent = ({
  buttonUnzoom, // default unzoom button
  modalState, // current state of the zoom modal: UNLOADED, LOADING, LOADED, UNLOADING
  img, // your image, prepped for zooming
  onUnzoom,
  //   close the modal if you want to use your own buttons or
  //   listeners in your custom experience
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    if (modalState === "LOADED") {
      setIsLoaded(true);
    } else if (modalState === "UNLOADING") {
      setIsLoaded(false);
    }
  }, [modalState]);

  const classCaption = isLoaded
    ? "zoom-caption zoom-caption--loaded"
    : "zoom-caption";

  return (
    <Box
      className={classCaption}
      onClick={onUnzoom}
      bg="#111111"
      h="100%"
      transition={"backgroundColor ease-in-out 0.3s"}
    >
      {buttonUnzoom}

      <figure>{img}</figure>
    </Box>
  );
};
