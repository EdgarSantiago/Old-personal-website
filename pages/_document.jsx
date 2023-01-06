import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../lib/theme.jsx";
import Script from "next/script.js";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt">
        <Head />

        <body style={{ margin: "0 !important" }}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
