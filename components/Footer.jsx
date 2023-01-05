import { Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("#000000", "#111111")}
      color="white"
      align="center"
      opacity={0.9}
      fontSize="md"
      py={3}
      w="100%"
    >
      Copyright &copy; {new Date().getFullYear()} por Edgar Santiago.
    </Box>
  );
};

export default Footer;
