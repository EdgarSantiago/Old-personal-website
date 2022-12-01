import { Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("#fafafa", "#111111")}
      align="center"
      opacity={0.9}
      fontSize="sm"
      py={1}
    >
      &copy; {new Date().getFullYear()} Desenvolvido por Edgar Santiago. Todos
      direitos reservados.
    </Box>
  );
};

export default Footer;
