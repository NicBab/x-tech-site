"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { HeroPhotos } from "@/constants/hero-photos";
import Image from "next/image";

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
      {HeroPhotos.map((photo: photo, index: number) => (
        <SwiperSlide key={`${photo.id}`}>
          <Image
            src={photo.src}
            alt={photo.alt || "Hero image"}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
