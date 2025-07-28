"use client";

import React from "react";
import { FEATURES } from "@/constants/index";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function StatCard() {
  return (
    <Box className="bg-black w-full py-10 px-6" sx={{ mt: 6 }}>
      <Swiper
        spaceBetween={16}
        slidesPerView={"auto"}
        grabCursor={true}
        style={{ paddingBottom: "1rem" }}
      >
        {FEATURES.map((feature) => (
          <SwiperSlide
            key={feature.id}
            style={{ width: 240 }}
          >
            <Card
              sx={{
                width: "100%",
                height: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#1a1a1a", // dark gray / near-black
              }}
              elevation={4}
            >
              <CardActionArea sx={{ height: "100%" }}>
                {/* Title Section */}
                <Box sx={{ px: 2, pt: 2 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    align="center"
                    className="orange-text-gradient"
                  >
                    {feature.title}
                  </Typography>
                </Box>

                {/* Description Section */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textAlign: "center",
                      mt: 1,
                    }}
                  >
                    {feature.desc}
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
