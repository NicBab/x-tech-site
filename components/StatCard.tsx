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
    <Box
      className="bg-black w-full"
      sx={{
        minHeight: '500', // Full screen height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 0,
        px: 0,
        py: 8, // vertical spacing inside section
      }}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        grabCursor={true}
        style={{ paddingBottom: "1rem", paddingLeft: "1rem", paddingRight: "1rem" }} // swiper inside padding
      >
        {FEATURES.map((feature) => (
          <SwiperSlide
            key={feature.id}
            style={{ width: 280 }}
          >
            <Card
              sx={{
                width: "100%",
                height: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#1a1a1a",
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
                    {feature.title}
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
