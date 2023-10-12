import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./style.css";
import { EffectCards, History } from "swiper/modules";
import Sing from '../../Organisms/Sign'

export default function Index() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      history={{
        key: "",
      }}
      onTouchEnd={() => {
        setTimeout(() => {
          const slideNumber: string = window.location.pathname.substring(1, 3);

          // switch(slideNumber) {
          //   case "1":
          //     break;
          //   case "10":
          //     break;
          // }
        }, 500)
      }}
      modules={[EffectCards, History]}
    >
      <SwiperSlide data-history="1"><Sing mainTitle={"Noah's Ark"} pageNo={"01"} navigate={"/ark"} /></SwiperSlide>
      <SwiperSlide data-history="2"><Sing mainTitle={"slide 2"} pageNo={"02"} navigate={"/ark"} /></SwiperSlide>
      <SwiperSlide data-history="3"><Sing mainTitle={"slide 3"} pageNo={"03"} navigate={"/ark"} /></SwiperSlide>
      <SwiperSlide data-history="4"><Sing mainTitle={"slide 4"} pageNo={"04"} navigate={"/ark"} /></SwiperSlide>
      <SwiperSlide data-history="5"><Sing mainTitle={"slide 5"} pageNo={"05"} navigate={"/ark"} /></SwiperSlide>
      <SwiperSlide data-history="6"><Sing mainTitle={"slide 6"} pageNo={"06"} navigate={"/ark"} /></SwiperSlide>
      <SwiperSlide data-history="7"><Sing mainTitle={"slide 7"} pageNo={"07"} navigate={"/ark"} /></SwiperSlide>
      <SwiperSlide data-history="8"><Sing mainTitle={"slide 8"} pageNo={"08"} navigate={"/ark"} /></SwiperSlide>
      <SwiperSlide data-history="9"><Sing mainTitle={"slide 9"} pageNo={"09"} navigate={"/ark"} /></SwiperSlide>
      <SwiperSlide data-history="10"><Sing mainTitle={"slide 10"} pageNo={"10"} navigate={"/ark"} /></SwiperSlide>
    </Swiper>
  );
}
