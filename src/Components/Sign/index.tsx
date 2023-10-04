import React from "react";
import { Sign } from "./style";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./style.css";
import { EffectCards, History } from "swiper/modules";

export default function Index() {
  const navigate = useNavigate();

  return (
    <Sign>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        history={{
          key: "slide",
        }}
        modules={[EffectCards, History]}
      >
        <SwiperSlide data-history="1">Slide 1</SwiperSlide>
        <SwiperSlide
          data-history="2"
          onClick={() => {
            navigate("ark");
          }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide data-history="3">Slide 3</SwiperSlide>
        <SwiperSlide data-history="4">Slide 4</SwiperSlide>
        <SwiperSlide data-history="5">Slide 5</SwiperSlide>
        <SwiperSlide data-history="6">Slide 6</SwiperSlide>
        <SwiperSlide data-history="7">Slide 7</SwiperSlide>
        <SwiperSlide data-history="8">Slide 8</SwiperSlide>
        <SwiperSlide data-history="9">Slide 9</SwiperSlide>
        <SwiperSlide data-history="10">Slide 10</SwiperSlide>
      </Swiper>
    </Sign>
  );
}
