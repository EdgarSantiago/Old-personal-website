import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "../lib/theme";

export default function Chakra({ cookies, children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
