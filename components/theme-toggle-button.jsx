import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsMoonStarsFill, BsFillMoonFill, BsSunriseFill } from "react-icons/bs";

const ThemeToggleButton = ({ color }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence moe="wait" initial={false}>
      <IconButton
        bg={useColorModeValue("black", "white")}
        color={useColorModeValue("white", "black")}
        aria-label="Toggle theme"
        icon={useColorModeValue(<BsMoonStarsFill />, <BsSunriseFill />)}
        onClick={toggleColorMode}
      ></IconButton>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
