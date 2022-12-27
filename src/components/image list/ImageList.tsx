import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/images/earring1.jpg',
    title: 'earring',
  },
  {
    img: '/images/shirts.jpg',
    title: 'shirts',
  },
  {
    img: '/images/cologne.png',
    title: 'cologne',
  },
  {
    img: '/images/necklace-stone.jpg',
    title: 'necklace on stone',
  },
  {
    img: '/images/ring1.jpg',
    title: 'black ring',
  },
  {
    img: '/images/Karine-1.jpg',
    title: 'wine bottle',
  },
  {
    img: '/images/heart-necklace.jpg',
    title: 'heart necklace',
  },
  {
    img: '/images/Sweets Flatlay-1.jpg',
    title: 'Sweets flatlay',
  },
  {
    img: '/images/leopard-shoes.jpg',
    title: 'Leopard shoes on pink',
  },
  {
    img: '/images/earring2.jpg',
    title: 'earring 2',
  },
];
