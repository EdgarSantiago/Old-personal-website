import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function BuyNow({ products }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      rounded={"md"}
      textAlign={"center"}
      minH="100%"
      py={18}
    >
      <Heading mb={6} fontSize="6xl">
        Buy now from anywhere
      </Heading>
      <Text mb={6}>Lets see that cart blow up</Text>
      <SwiperProducts p={products} />
    </Box>
  );
}

function SwiperProducts({ p }) {
  return (
    <Swiper slidesPerView={3} spaceBetween={10}>
      {p.map((pr) => (
        <SwiperSlide>
          <Card title={pr.title} collection={pr.collection} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
