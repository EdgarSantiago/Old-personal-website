import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsMoonStarsFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggleButton = ({ color }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence moe="wait" initial={false}>
      <IconButton
        color={color}
        bg="transparent"
        aria-label="Toggle theme"
        icon={useColorModeValue(<BsMoonStarsFill />, <BsFillMoonFill />)}
        onClick={toggleColorMode}
      ></IconButton>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
