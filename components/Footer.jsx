import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" py={3}>
      &copy; {new Date().getFullYear()} Desenvolvido por Edgar Santiago. Todos
      direitos reservados.
    </Box>
  );
};

export default Footer;
