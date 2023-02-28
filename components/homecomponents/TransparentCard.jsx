import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TransparentCard({ children, padding = "10px" }) {
  return (
    <Box
      _hover={{ cursor: "pointer" }}
      as={motion.div}
      initial={{ border: "1px solid white" }}
      transition="ease-in-out"
      p={padding}
      h="100%"
      rounded="md"
      shadow="lg"
      backdropFilter="auto"
      backdropBlur="10px"
      bg="#fafafa41"
      color="white"
    >
      {children}
    </Box>
  );
}
