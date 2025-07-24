"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {PHOTOS} from "@/constants/photos";

export interface photo {
  id: string;
  src: string;
  alt?: string;
}

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      speed={1500}
      className="w-full h-full rounded-xl overflow-hidden"
    >
      {PHOTOS.map((photo: photo) => (
        <SwiperSlide key={`${photo.id}`}>
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
