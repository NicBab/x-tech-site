import * as React from "react";
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
        <Card
          key={info.id}
          sx={{
            flex: "1 1 220px", // minimum preferred width
            maxWidth: 320, // max width cap even on xl
            minWidth: 220, // never shrink below this
            height: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            overflow: "hidden",
            p: 0,
          }}
          elevation={4}
        >
          <CardActionArea
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              p: 0,
              m: 0,
            }}
          >
            <CardMedia
              component="img"
              image={info.src}
              alt={info.alt}
              height="100"
              sx={{
                display: "flex",
                m: 0,
                p: 0,
                borderRadius: 0,
              }}
            />

            <CardContent
              sx={{
                flexGrow: 1,
                px: 2,
                pt: 2,
              }}
            >
              <Typography
                variant="h5"
                component="div"
                align="center"
                sx={{ fontWeight: 600 }}
              >
                {info.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                }}
              >
                {/* {info.desc} */}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
