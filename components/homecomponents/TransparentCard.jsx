import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TransparentCard({ children }) {
  return (
    <Box
      _hover={{ cursor: "pointer" }}
      as={motion.div}
      initial={{ scale: 0, border: "1px solid white" }}
      animate={{ scale: 1, border: "1px solid white" }}
      whileHover={{ scale: 1.01, border: "1px solid #9e16e7d0" }}
      transition="ease-out 0.4s"
      p={"20px"}
      h="100%"
      rounded="md"
      shadow="lg"
      backdropFilter="auto"
      backdropBlur="10px"
      bg="#fafafa1b"
      color="white"
    >
      {children}
    </Box>
  );
}
