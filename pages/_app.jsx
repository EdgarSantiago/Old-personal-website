import Main from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import "../styles/globals.css";
import Fonts from "../components/Fonts";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router, ip }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Main router={router}>
        <Component {...pageProps} key={router.asPath} />
      </Main>
    </Chakra>
  );
}

export default Website;
