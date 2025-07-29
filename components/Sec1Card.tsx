import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from '@mui/material';
import { Sec1CardInfo } from '@/constants/index';

export default function Sec1Card() {
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
      {Sec1CardInfo.map((info) => (
        <Card
          key={info.id}
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
              image={info.src}
              alt={info.alt}
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
                {info.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                }}
              >
                {info.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
