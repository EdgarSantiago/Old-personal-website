import {
  Button,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { BsCpu } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { MdOutlineSdStorage } from "react-icons/md";

export default function CustomModal() {
  const OverlayOne = () => (
    <>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(-50deg)"
      />
      <ModalContent
        as={motion.div}
        initial={{ scale: 0, border: "1px solid white" }}
        animate={{ scale: 1, border: "1px solid white" }}
        whileHover={{ scale: 1.01, border: "1px solid #9e16e7d0" }}
        bg="#fafafa1b"
        color="white"
      >
        <ModalHeader>Meu pc</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaMemory} color="green.500" />
              32gb ram ddr4 3200mhz
            </ListItem>
            <ListItem>
              <ListIcon as={BsCpu} color="green.500" />
              11th Gen Intel® Core™ i5-11400H @ 2.70GHz × 12
            </ListItem>
            <ListItem>
              <ListIcon as={BsCpu} color="green.500" />
              NVIDIA GeForce GTX 1650
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={MdOutlineSdStorage} color="green.500" />1 nvme 512GB
              and 1 nvme 1T
            </ListItem>
          </List>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme={"purple"} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );

  const OverlayTwo = () => (
    <>
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>Modal Title 2</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Custom backdrop filters!</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        My pc
      </Button>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Use Overlay two
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
      </Modal>
    </>
  );
}
