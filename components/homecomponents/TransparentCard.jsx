import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TransparentCard({ children, padding = "10px" }) {
  return (
    <Box
      _hover={{ cursor: "pointer" }}
      as={motion.div}
      initial={{ scale: 0, border: "1px solid white" }}
      animate={{ scale: 1, border: "1px solid white" }}
      whileHover={{ scale: 1.01, border: "1px solid #c92828d0" }}
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
