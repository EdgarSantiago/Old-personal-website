import Layout from "../components/layouts/article";
import Banner from "../components/Banner";
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
  Center,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
  Icon,
} from "@chakra-ui/react";
import ParallaxText, { AnimeRockersParallax } from "../components/ParallaxTxt";
import Notebook from "../components/Notebook";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Street from "../components/Street/Street";
import {
  TbPlayerPlay,
  TbPlayerSkipBack,
  TbPlayerSkipForward,
  TbWorld,
} from "react-icons/tb";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FirstGrid from "../components/homecomponents/FirstGrid";
import TransparentCard from "../components/homecomponents/TransparentCard";
import { BsFileImage, BsLink45Deg, BsMusicNoteBeamed } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";

export default function Home() {
  const [buttonHover, setButtonHover] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const dateString = new Intl.DateTimeFormat("pt-BR", dateOptions).format(
      currentDate
    );
    const timeString = new Intl.DateTimeFormat("pt-BR", timeOptions).format(
      currentDate
    );
    setDate(dateString);
    setTime(timeString);
  }, []);

  return (
    <SimpleGrid bg="#11111117" h="100%" columns={[1, 1, 1, 2, 2]} spacing={5}>
      <FirstGrid />
      <Flex flexDirection={"column"} height="100%" justify="center">
        <SimpleGrid columns={2} spacing={5} mb={5}>
          <TransparentCard>
            <Flex
              direction={"column"}
              h="100%"
              justify="center"
              textAlign={"center"}
            >
              <HStack mb="3" spacing={5} justify={"center"}>
                <Button size="xs" colorScheme={"whiteAlpha"}>
                  Minha playlist
                </Button>
              </HStack>
              <HStack mb="3" spacing={[2, 2, 2, 5]} justify={"center"}>
                <IconButton
                  colorScheme={"whiteAlpha"}
                  icon={<TbPlayerSkipBack />}
                />
                <IconButton
                  colorScheme={"whiteAlpha"}
                  icon={<TbPlayerPlay />}
                  size="lg"
                  fontSize="2xl"
                />
                <IconButton
                  colorScheme={"whiteAlpha"}
                  icon={<TbPlayerSkipForward />}
                />
              </HStack>
              <Box>
                <SliderThumbWithTooltip />
              </Box>
              <Text fontSize="lg" mx={[0, 0, 2, 4, 8]}>
                Cantor - nome da música
              </Text>
            </Flex>
          </TransparentCard>
          <TransparentCard>
            <Flex
              direction={"column"}
              h="100%"
              justify="center"
              textAlign={"center"}
            >
              <Text fontSize="sm">{date}</Text>
              <Text fontSize={["3xl", "5xl"]} fontWeight="bold">
                {time}
              </Text>
              <Text fontSize="sm" mx={[0, 0, 0, 4, 8]}>
                Com organização e tempo, acha-se o segredo de fazer tudo e bem
                feito.
              </Text>
            </Flex>
          </TransparentCard>
        </SimpleGrid>

        <Box color="white" mb={2}>
          <Flex w="100%" h="100%">
            <Icon w={6} h={6} size="lg" as={BsLink45Deg} />
            <Text ml={2}>Lista de sites</Text>
          </Flex>
        </Box>
        <SimpleGrid w="100%" columns={4} spacing={5}>
          <TransparentCard>
            <Flex align="center" justify={"center"} w="100%" h="100%">
              <Icon w={6} h={6} size="lg" as={BsFileImage} />
              <Text ml={2}>Album de fotos</Text>
            </Flex>
          </TransparentCard>

          <TransparentCard>
            <Flex align="center" justify={"center"} w="100%" h="100%">
              <Icon w={6} h={6} size="lg" as={BsMusicNoteBeamed} />
              <Text ml={2}>Músicas</Text>
            </Flex>
          </TransparentCard>

          <TransparentCard>
            <Flex align="center" justify={"center"} w="100%" h="100%">
              <Icon w={6} h={6} size="lg" as={FaBlog} />
              <Text ml={2}>Blog</Text>
            </Flex>
          </TransparentCard>

          <TransparentCard>
            <Flex align="center" justify={"center"} w="100%" h="100%">
              <Icon w={6} h={6} size="lg" as={TbWorld} />
              <Text ml={2}>Websites legais</Text>
            </Flex>
          </TransparentCard>
        </SimpleGrid>
      </Flex>
    </SimpleGrid>
  );
}

function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = useState(80);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Slider
      id="slider"
      defaultValue={80}
      min={0}
      max={100}
      colorScheme="purple"
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="purple.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}
