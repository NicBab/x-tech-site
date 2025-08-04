"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { Sec1CardInfo } from "@/constants/index";

export default function Sec1Card() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 4,
        width: "100%",
        mt: 6,
        px: 2,
      }}
    >
      {Sec1CardInfo.map((info) => (
        <Link href={info.href} key={info.id} style={{ textDecoration: "none" }}>
          <Card
            sx={{
              width: 280,
              height: 200,
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              overflow: "hidden",
              borderRadius: 2,
              p: 0,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
            elevation={4}
          >
            <CardActionArea
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "stretch",
                p: 0,
                m: 0,
              }}
            >
              <CardMedia
                component="img"
                image={info.src}
                alt={info.alt}
                sx={{
                  height: 160,
                  width: "100%",
                  objectFit: "cover",
                  display: "block",
                  overflow: "hidden",
                  backgroundColor: "#f9f9f9",
                }}
              />

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center", // vertical alignment
                  justifyContent: "center",
                  textAlign: "center",
                  px: 2,
                  py: 1, // less vertical padding
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: 1.2, // tighter line spacing
                    maxHeight: "3.5em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {info.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </Box>
  );
}
