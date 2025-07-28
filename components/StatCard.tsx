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
    <Box sx={{ width: "100%", mt: 6, px: 2 }}>
      <Swiper
        spaceBetween={16}
        slidesPerView={"auto"}
        grabCursor={true}
        style={{ paddingBottom: "1rem" }}
      >
        {FEATURES.map((feature) => (
          <SwiperSlide
            key={feature.id}
            style={{ width: 240 }} // Fixed width for uniformity
          >
            <Card
              sx={{
                width: "100%",
                height: 260, // Fixed height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              elevation={3}
            >
              <CardActionArea sx={{ height: "100%" }}>
                {/* Title Section */}
                <Box sx={{ px: 2, pt: 2, text: "orange-text-gradient"}}>
                  <Typography variant="h6" component="div" align="center">
                    {feature.title}
                  </Typography>
                </Box>

                {/* Description Section */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
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
