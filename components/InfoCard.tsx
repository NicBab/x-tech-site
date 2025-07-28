// components/ActionAreaCard.tsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';
import { INFO } from '@/constants/photos'; // Your array of card data

export default function InfoCard () {
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
        <Card key={photo.id} sx={{ maxWidth: 200, width: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={photo.src}
              alt={photo.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="text-center">
                {photo.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {photo.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
