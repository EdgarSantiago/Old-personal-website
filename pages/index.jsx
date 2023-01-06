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

export default function Home() {
  const [buttonHover, setButtonHover] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const toast = useToast({
    position: "top",
    title: "Em breve",
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
  }, []);

  return (
    <SimpleGrid h="100%" columns={[1, 1, 1, 2, 2]} spacing={5}>
      <FirstGrid />
      <Flex flexDirection={"column"} height="100%" justify="center">
        <SimpleGrid columns={2} spacing={5} mb={5}>
          <CustomModal />
          <TransparentCard>
            <Flex
              //onClick={() => {
              //  toast({
              //    status: "warning",
              //  });
              //}}
              direction={"column"}
              h="100%"
              justify="center"
              textAlign={"center"}
            >
              <HStack mb="3" spacing={5} justify={"center"}>
                <Button size="xs" colorScheme={"whiteAlpha"}>
                  Conecte seu spotify
                </Button>
              </HStack>
              <HStack mb="3" spacing={[2, 2, 2, 5]} justify={"center"}>
                <IconButton
                  colorScheme={"whiteAlpha"}
                  icon={<TbPlayerSkipBack />}
                />
                <IconButton
                  id="togglePlay"
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
            <Text ml={2}>Lista de links</Text>
          </Flex>
        </Box>
        <SimpleGrid
          w="100%"
          columns={[1, 1, 2, 2, 4]}
          spacing={[2, 2, 5, 5, 5]}
          mb={5}
        >
          <Link href="/album">
            <Box>
              <TransparentCard>
                <Flex align="center" justify={"center"} w="100%" h="100%">
                  <Icon w={6} h={6} size="lg" as={BsFileImage} />
                  <Text ml={2}>Album de fotos</Text>
                </Flex>
              </TransparentCard>
            </Box>
          </Link>

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

          <TransparentCard>
            <Flex align="center" justify={"center"} w="100%" h="100%">
              <Icon w={6} h={6} size="lg" as={IoGameControllerOutline} />
              <Text ml={2}>Meus jogos</Text>
            </Flex>
          </TransparentCard>

          <TransparentCard>
            <Flex align="center" justify={"center"} w="100%" h="100%">
              <Icon w={6} h={6} size="lg" as={TbWorld} />
              <Text ml={2}>Websites legais</Text>
            </Flex>
          </TransparentCard>

          <TransparentCard>
            <Flex align="center" justify={"center"} w="100%" h="100%">
              <Icon w={6} h={6} size="lg" as={BsCpu} />
              <Text ml={2}>Meu pc</Text>
            </Flex>
          </TransparentCard>

          <TransparentCard>
            <Flex align="center" justify={"center"} w="100%" h="100%">
              <Icon w={6} h={6} size="lg" as={MdWorkOutline} />
              <Text ml={2}>Meu trabalho</Text>
            </Flex>
          </TransparentCard>
        </SimpleGrid>
        <Box color="white" mb={2}>
          <Flex w="100%" h="100%">
            <Icon w={4} h={4} size="lg" as={BsGithub} />
            <Text ml={2}>Minhas contribuições</Text>
          </Flex>
        </Box>
        <Box>
          <TransparentCard>
            <GitHubCalendar username="EdgarSantiago" color="#9e16e7d0" />
          </TransparentCard>
        </Box>
      </Flex>
      <Script src="https://sdk.scdn.co/spotify-player.js" />
      <Script>
        {`
        window.onSpotifyWebPlaybackSDKReady = () => {
            const token = 'BQAcdfvwtuZn6l1PUaWlQAI6Tcb8c5yKmZrW-eEmD3gfn1UFjeSSl2OdbHL9NreNVeQ3JhHn5-0ehjHX8fcgTihtcGCN5gIiaQJL3qTDDZ33rrJ7Ic7qeGNPJOsZs3D4gRuLYO9657-Cg23cyT2O5JllO4k-iFWwYEDXNTRoORb_Zh0BuNMFYszSR2OcmQlveEtRl9reE0CR5bD-wS5FpUUAeBcLn0O-n-2PEqzgwcGGyFVuEA';
            const player = new Spotify.Player({
                name: 'edgarz.tech',
                getOAuthToken: cb => { cb(token); },
                volume: 1,

            });

            // Ready
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('initialization_error', ({ message }) => {
                console.error(message);
            });

            player.addListener('authentication_error', ({ message }) => {
                console.error(message);
            });

            player.addListener('account_error', ({ message }) => {
                console.error(message);
            });

            document.getElementById('togglePlay').onclick = function() {
              player.togglePlay();
            };

            player.connect();
        }  `}
      </Script>
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
