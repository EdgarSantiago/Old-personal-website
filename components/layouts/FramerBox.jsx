import { Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
export default function FramerBox({ children }) {
  return (
    <ChakraBox
      initial={{
        scale: 1,
      }}
      whileInView={{ scale: 1.1 }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeatType: "loop",
      }}
    >
      {children}
    </ChakraBox>
  );
}
