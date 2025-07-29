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
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: 4,
        width: '100%',
        mt: 6,
        px: 2,
      }}
    >
      {INFO.map((photo) => (
        <Card
          key={photo.id}
          sx={{
            maxWidth: 300,
            width: '100%',
            height: 420,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            overflow: 'hidden',
            p: 0, // remove any card-level padding
          }}
          elevation={4}
        >
          <CardActionArea
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              p: 0,
              m: 0,
            }}
          >
            <CardMedia
              component="img"
              image={photo.src}
              alt={photo.alt}
              height="220"
              sx={{
                display: 'block',
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
                variant="h4"
                component="div"
                align="center"
                sx={{ mb: 1 }}
              >
                {photo.title}
              </Typography>
              <Typography
                variant="body1"
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
