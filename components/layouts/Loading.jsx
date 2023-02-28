import { Box, Flex, Heading, Image, Spinner } from "@chakra-ui/react";
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
    }, 2000);
  }, []);

  return (
    <AnimatePresence initial={false}>
      {!isLoaded && (
        <StyledBox
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.5", type: "easeInOut" }}
          height="100vh"
          width="100%"
          bg="#030303"
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
            textAlign="center"
          >
            <Image
              filter={"hue-rotate(200deg) saturate(200%)"}
              src="https://media0.giphy.com/media/VseXvvxwowwCc/giphy.gif?cid=ecf05e47yve7xzbgl5edt75s00ig51fbsv2wd83glmn0v5vw&rid=giphy.gif&ct=g"
              height="150px"
              width="100%"
              alt="loading"
            />
          </Flex>
        </StyledBox>
      )}
    </AnimatePresence>
  );
}
