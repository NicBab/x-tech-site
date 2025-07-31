"use client";

import React, { useRef } from "react";
import { Sec2CardInfo } from "@/constants/index";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export default function Sec2Card() {
  // Refs for navigation buttons
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      component="section"
      className="bg-black w-screen relative"
      sx={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 0,
        py: 10,
        m: 0,
      }}
    >
      {/* Left Arrow */}
      <div className="absolute bottom-0 w-full px-4 flex justify-between z-10">
        <div ref={prevRef} className="cursor-pointer">
          <ChevronLeft
            size={32}
            className="text-white hover:text-orange-400 transition m-8"
          />
        </div>

        {/* Right Arrow */}
        <div ref={nextRef} className="cursor-pointer">
          <ChevronRight
            size={32}
            className="text-white hover:text-orange-400 transition m-8"
          />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={20}
        slidesPerView={"auto"}
        grabCursor={true}
        style={{
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        {Sec2CardInfo.map((info) => (
          <SwiperSlide key={info.id} style={{ width: 280 }}>
            <Card
              sx={{
                width: "100%",
                height: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#1a1a1a",
                borderRadius: "4px",
              }}
              elevation={4}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <Box sx={{ px: 2, pt: 2 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    align="center"
                    className="orange-text-gradient"
                  >
                    {info.title}
                  </Typography>
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textAlign: "center",
                      mt: 1,
                    }}
                  >
                    {info.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
