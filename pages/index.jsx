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
  useToast,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
import { IoGameControllerOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FirstGrid from "../components/homecomponents/FirstGrid";
import TransparentCard from "../components/homecomponents/TransparentCard";
import {
  BsCpu,
  BsFileImage,
  BsGithub,
  BsLink45Deg,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import SpotifyPlayer from "../components/SpotifyPlayer";
import Script from "next/script";
import CustomModal from "../components/CustomModal";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ReactPlayer from "react-player";

const backgroundImages = [
  "https://rare-gallery.com/uploads/posts/547224-landscape-wallpaper.gif",
  "https://i.pinimg.com/originals/ab/26/01/ab26019d6a9def8082a9d5134a9e2d74.gif",
  "https://www.nawpic.com/media/2020/pixel-art-nawpic.webp",
  "https://wallpaperaccess.com/full/5687409.gif",
  "https://img.idesign.vn/2020/09/id14.png",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState("");
  const [buttonHover, setButtonHover] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const toast = useToast({
    position: "top",
    title: "Em desenvolvimento",
  });
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

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    setCurrentImage(randomImage);
  }, [currentImage]);

  return (
    <Layout title="Início">
      <Box
        rounded="md"
        height={["100%", "100%", "100%", "100vh"]}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`linear-gradient(
      to bottom,
    #39353589,
      #39353589
    ),url(${currentImage})});`}
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
          </Breadcrumb>
        </Box>
        <SimpleGrid
          h="100%"
          columns={[1, 1, 1, 2, 2]}
          spacing={5}
          p={[2, 5, 5, 10]}
        >
          <FirstGrid />
          <Flex flexDirection={"column"} height="100%" justify="center">
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={[2, 2, 2, 2, 5]} mb={5}>
              <MusicPlayer />
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
                    Com organização e tempo, acha-se o segredo de fazer tudo e
                    bem feito.
                  </Text>
                </Flex>
              </TransparentCard>
            </SimpleGrid>

            <Box color="white" mb={2}>
              <Flex w="100%" h="100%">
                <Icon w={6} h={6} size="lg" as={BsLink45Deg} />
                <Text ml={2}>Lista de links</Text>
              </Flex>
            </Box>
            <SimpleGrid
              w="100%"
              columns={[1, 1, 2, 2, 3]}
              spacing={[2, 2, 2, 2, 5]}
              mb={5}
            >
              <Link href="/album">
                <Box>
                  <TransparentCard>
                    <Flex align="center" justify={"center"} w="100%" h="100%">
                      <Icon w={6} h={6} size="sm" as={BsFileImage} />
                      <Text ml={2}>Album</Text>
                    </Flex>
                  </TransparentCard>
                </Box>
              </Link>

              <TransparentCard>
                <CustomModal />
              </TransparentCard>

              <Link href="/skills">
                <Box>
                  <TransparentCard>
                    <Flex align="center" justify={"center"} w="100%" h="100%">
                      <Icon w={6} h={6} size="sm" as={TbWorld} />
                      <Text ml={2}>Habilidades</Text>
                    </Flex>
                  </TransparentCard>
                </Box>
              </Link>
              {/*
              <TransparentCard>
                <Flex align="center" justify={"center"} w="100%" h="100%">
                  <Icon w={6} h={6} size="sm" as={MdWorkOutline} />
                  <Text ml={2}>Meu trabalho</Text>
                </Flex>
              </TransparentCard>*/}
            </SimpleGrid>
            <Box color="white" mb={2}>
              <Flex w="100%" h="100%">
                <Icon w={4} h={4} size="sm" as={BsGithub} />
                <Text ml={2}>Minhas contribuições</Text>
              </Flex>
            </Box>
            <Box>
              <TransparentCard>
                <GitHubCalendar username="EdgarSantiago" color="#c92828d0" />
              </TransparentCard>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Layout>
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
      colorScheme="red"
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="red.500"
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

function MusicPlayer() {
  const url =
    "https://www.youtube.com/watch?v=oRP-rsbv58s&ab_channel=PsychedelicUniverse";
  const [timer, settimer] = useState();

  useEffect(() => {
    setTimeout(() => {
      settimer(true);
    }, 1500);
  }, []);

  return (
    <TransparentCard padding="5px">
      <Flex direction={"column"} h="100%" justify="center" textAlign={"center"}>
        <HStack spacing={5} justify={"center"}></HStack>
        {timer ? (
          <ReactPlayer
            style={{ borderRadius: "20px !important" }}
            loop={true}
            width={"100%"}
            height="100%"
            url={url}
            playing={true}
            controls={true}
          />
        ) : null}
      </Flex>
    </TransparentCard>
  );
}
