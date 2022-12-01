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
  const [color, setColor] = useState("#111010");
  const [isShadow, setIsShadow] = useState("");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 250) {
      return (
        setColor("#111111"),
        setIsShadow(""),
        setBgColor("transparent"),
        setBgColor2("transparent")
      );
    } else if (window.scrollY > 250) {
      return (
        setColor("#1a1818"),
        setIsShadow("md"),
        setBgColor("linear(to-r, #faedbe , #f83636)"),
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
        px={["0px", "10px", "20px", "100px", "250px", "500px"]}
        py="10px"
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
                mr="15px"
                fontSize="26px"
                fontFamily="alien"
                fontWeight={"hairline"}
              >
                EdgarZ
              </Heading>
            </Box>
          </Link>
          <Show above="1000px">
            <Spacer />
            <ThemeToggleButton />
          </Show>

          <Show below="1000px">
            <Spacer />
            <ThemeToggleButton />
          </Show>
        </Flex>
      </Box>
    </>
  );
}
