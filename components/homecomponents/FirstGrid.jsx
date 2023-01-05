import {
  Container,
  Box,
  Divider,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Grid,
  SimpleGrid,
  Avatar,
  IconButton,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import {
  BsChatSquareQuote,
  BsFacebook,
  BsGithub,
  BsLink45Deg,
  BsMailbox,
  BsMailbox2,
  BsShieldFillExclamation,
  BsThreeDotsVertical,
  BsWhatsapp,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FirstGrid() {
  const [buttonHover, setButtonHover] = useState("");

  return (
    <Box display={"block"} my="auto">
      {/*compo avatar*/}
      <Flex
        mb={8}
        gap="4"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box as={motion.div} whileHover={{ rotateY: 180 }}>
          <Avatar
            shadow="xl"
            size="2xl"
            name="Edgar Santiago"
            src="https://camo.githubusercontent.com/fc59303e8d7b2854316f6e51f024184132a25b7377164a6a7a5c80dd83bf6230/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f30392f63362f32392f30396336323930336265656261333336646339646137366562356339613130372e676966"
          />
        </Box>

        <Box textShadow="2px 2px 5px #2217ecb5" color="#fafafaee">
          <Heading size="3xl" mb={1}>
            edgarz
            <span style={{ fontSize: "30px", color: "#b3b5efe3" }}>.tech</span>
          </Heading>
        </Box>
      </Flex>
      {/*compo avatar*/}
      {/*compo avatar*/}
      <Flex
        mb={4}
        gap="4"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box
          as={motion.div}
          animate={{ border: "1px solid white" }}
          whileHover={{ scale: 1.01, border: "1px solid #9e16e7d0" }}
          w={["100%", "100%", "100%", "100%", "60%"]}
          p={["20px", "40px"]}
          rounded="md"
          shadow="lg"
          backdropFilter="auto"
          backdropBlur="10px"
          bg="#fafafa1b"
          color="white"
        >
          <Icon
            left={3}
            top={3}
            h={6}
            w={6}
            position="absolute"
            as={BsChatSquareQuote}
          />
          <Icon
            right={3}
            bottom={3}
            h={6}
            w={6}
            position="absolute"
            as={BsChatSquareQuote}
          />
          <Heading textShadow="2px 2px 10px #11111154" size="md" mb={1}>
            Hello World!
          </Heading>
          <Text>
            -- Um site construído no século 21, vivendo na borda da internet
          </Text>
        </Box>
      </Flex>
      {/*compo avatar*/}

      {/*compo avatar*/}

      <Flex gap="4" justifyContent="center" alignItems="center" flexWrap="wrap">
        <HStack
          position={"relative"}
          as={motion.div}
          animate={{ border: "1px solid white" }}
          whileHover={{ scale: 1.01, border: "1px solid #9e16e7d0" }}
          backdropFilter="auto"
          backdropBlur="10px"
          bg="#fafafa1b"
          color="white"
          spacing="4px"
          w={["100%", "100%", "100%", "100%", "60%"]}
          p={["10px", "10px"]}
          rounded="md"
          shadow="lg"
        >
          <IconButton
            onMouseEnter={() => setButtonHover("Meu github ~")}
            onMouseLeave={() => setButtonHover("")}
            bg={"ghost"}
            color="github.500"
            aria-label="Add to friends"
            icon={<BsGithub />}
          />
          <IconButton
            onMouseEnter={() => setButtonHover("Meu whatsapp ~")}
            onMouseLeave={() => setButtonHover("")}
            bg={"ghost"}
            color="whatsapp.500"
            aria-label="Add to friends"
            icon={<BsWhatsapp />}
          />

          <IconButton
            shadow={"md"}
            onMouseEnter={() => setButtonHover("Manda um email ~")}
            onMouseLeave={() => setButtonHover("")}
            bg={"ghost"}
            color="red.500"
            aria-label="Add to friends"
            icon={<BsMailbox2 />}
          />
          <Text position="absolute" right={2}>
            {buttonHover}
          </Text>
        </HStack>
      </Flex>
      {/*compo avatar*/}
    </Box>
  );
}
