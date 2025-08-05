"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { Sec3CardInfo } from "@/constants/sec3";
import Link from "next/link";

export default function Sec3Card() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        width: "100%",
        mx: 2,
        my: 2,
        px: 2,
      }}
    >
      {Sec3CardInfo.map((info) => (
        <Link href={info.href} key={info.id} style={{ textDecoration: "none" }}>
          <Card
            key={info.id}
            className="cards"
            sx={{
              width: "100%",
              maxWidth: 900,
              minHeight: 180,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            elevation={4}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                p: 2,
              }}
            >
              {/* <Box
              sx={{
                width: 60,
                height: 60,
                minWidth: 60,
                minHeight: 60,
                borderRadius: "50%",
                backgroundColor: "#fb923c", // similar to 'bg-dimBlue'
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 3,
              }}
            >
              <CardMedia
                component="img"
                src={info.icon}
                alt="icon"
                sx={{
                  width: "50%",
                  height: "50%",
                  objectFit: "contain",
                }}
              />
            </Box> */}

              <CardContent sx={{ flex: 1, pl: 0 }}>
                <Typography
                  className="orange-text-gradient"
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 600, mb: 1 }}
                >
                  {info.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {info.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </Box>
  );
}
