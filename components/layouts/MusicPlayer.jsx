import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function MusicPlayer() {
  const url = ["/liquidhook.mp3", "/liquidhook.mp3"];
  const [timer, settimer] = useState();

  useEffect(() => {
    setTimeout(() => {
      settimer(true);
    }, 500);
  }, []);

  return (
    <Flex
      h="50px"
      w="20%"
      mx="auto"
      mb={8}
      justify="center"
      textAlign={"center"}
      position="absolute"
      top="0"
      left="0"
    >
      {timer ? (
        <ReactPlayer
          style={{ borderRadius: "20px !important", zIndex: 999 }}
          loop={true}
          width={"100%"}
          height="100%"
          url={url}
          playing={true}
          controls={true}
        />
      ) : null}
    </Flex>
  );
}
