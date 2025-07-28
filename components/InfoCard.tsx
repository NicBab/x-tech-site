// components/ActionAreaCard.tsx
import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from '@mui/material';
import { INFO } from '@/constants/photos';

export default function InfoCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'row' },
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: 3,
        width: '100%',
        mt: 6,
        px: 2,
      }}
    >
      {INFO.map((photo) => (
        <Card
          key={photo.id}
          sx={{
            maxWidth: 200,
            width: '100%',
            height: 320, // Increased height here
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardActionArea sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image={photo.src}
              alt={photo.alt}
            />
            <CardContent sx={{ px: 2 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
              >
                {photo.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                }}
              >
                {photo.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
