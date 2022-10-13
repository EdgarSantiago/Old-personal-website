import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FramerBox from "./layouts/FramerBox";

export default function Banner() {
  return (
    <>
      <Box shadow="lg" w="100%" position={"sticky"} top="0px" zIndex={"-3"}>
        <Swiper
          effect="fade"
          slidesPerView={1}
          spaceBetween={150}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          className="mySwipe mt-0"
          modules={[Autoplay, EffectFade, Navigation]}
        >
          <SwiperSlide>
            <BannerSlide imgLink="" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}

export function BannerSlide({ children, imgLink, width }) {
  return (
    <FramerBox>
      <Box
        filter="auto"
        brightness="70%"
        h={["30vh", "40vh"]}
        width="100%"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundImage: `linear-gradient(to top,#11111130,#11111116 ),url(${imgLink})`,
        }}
        className=" text-center text-white"
      ></Box>
    </FramerBox>
  );
}
