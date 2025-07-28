// components/ActionAreaCard.tsx
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import { FEATURES } from "@/constants/index"; // Your array of card data

export default function StatCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "row" },
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 3,
        width: "100%",
        mt: 6,
        px: 2,
      }}
    >
      {FEATURES.map((feature) => (
        <Card key={feature.id} sx={{ maxWidth: 200, width: "100%" }}>
          <CardActionArea>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-center"
            >
              {feature.title}
            </Typography>
           
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {feature.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
