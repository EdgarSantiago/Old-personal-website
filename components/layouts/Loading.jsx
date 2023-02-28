import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledBox } from "./FramerBox";

export default function Loading({ ip }) {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(ip);

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";

    setTimeout(() => {
      setIsLoaded(true);
      document.documentElement.style.overflowY = "scroll";
    }, 2500);
  }, []);

  return (
    <AnimatePresence initial={false}>
      {!isLoaded && (
        <StyledBox
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.4", type: "easeInOut" }}
          height="100vh"
          width="100%"
          bg="#000000"
          position="absolute"
          top={0}
          left={0}
          zIndex="999"
          justify-content="center"
          align-items="center"
          display="flex"
        >
          <Flex
            justifyContent={"center"}
            direction="column"
            m="auto"
            justify="center"
          >
            <Heading color="white" mb={5}>
              Bem vindo {ip} aguarde
            </Heading>
            <Spinner
              thickness="4px"
              speed="0.3s"
              emptyColor="red.200"
              color="red.500"
              size="xl"
              alignSelf={"center"}
            />
          </Flex>
        </StyledBox>
      )}
    </AnimatePresence>
  );
}
