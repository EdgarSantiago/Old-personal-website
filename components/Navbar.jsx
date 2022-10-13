import { ChevronDownIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import {
  Flex,
  Box,
  Button,
  Spacer,
  useColorModeValue,
  Heading,
  Image,
  chakra,
  HStack,
  Show,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [bgColor, setBgColor] = useState("");
  const [bgColor2, setBgColor2] = useState("");
  const [color, setColor] = useState("#c1b1db");
  const [isShadow, setIsShadow] = useState("");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 250) {
      return (
        setColor("#c5a9f1"),
        setIsShadow(""),
        setBgColor("transparent"),
        setBgColor2("transparent")
      );
    } else if (window.scrollY > 250) {
      return (
        setColor("#1a1818"),
        setIsShadow("md"),
        setBgColor("linear(to-r, #faedbe , #9472cf)"),
        setBgColor2("linear(to-r, #111111, #111111)")
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <Box
        shadow={isShadow}
        bgGradient={useColorModeValue(bgColor, bgColor2)}
        position="fixed"
        top={0}
        w="100%"
        zIndex={2}
        px={["5px", "10px", "20px", "300px"]}
      >
        <Flex
          minWidth="max-content"
          px={[4, 4]}
          py={1}
          alignItems="center"
          gap="2"
        >
          <Link href="/">
            <Box className="click">
              <Heading
                color={useColorModeValue(color, !color)}
                fontSize="20px"
                mr="15px"
              >
                Teste
              </Heading>
            </Box>
          </Link>
          <Show above="1000px">
            <Spacer />

            <HStack spacing="5px">
              <Link href="/">
                <Button
                  color={useColorModeValue(color, !color)}
                  variant="ghost"
                  colorSchema="green"
                >
                  Início
                </Button>
              </Link>
              <Link href="/">
                <Button
                  color={useColorModeValue(color, !color)}
                  variant="ghost"
                  colorSchema="green"
                >
                  Blog
                </Button>
              </Link>
              <Link href="/categories">
                <Button
                  color={useColorModeValue(color, !color)}
                  variant="ghost"
                  colorSchema="green"
                >
                  Sobre mim
                </Button>
              </Link>
            </HStack>
          </Show>

          <Show below="1000px">
            <Spacer />
            <Box>
              <Menu>
                <MenuButton as={Button} px="10px">
                  <HamburgerIcon w={4} h={4} />
                </MenuButton>
                <MenuList>
                  <Link href="/">
                    <MenuItem>Início</MenuItem>
                  </Link>
                  <MenuItem>Categorias</MenuItem>
                  <MenuItem>Última notícias</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Show>
        </Flex>
      </Box>
    </>
  );
}
