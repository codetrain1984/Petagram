import { ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import usePost from '../../../Hook/usePost'

export default function Postprofile() {
  const { postData } = usePost()
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      mt={5}
      mb={5}
      p={1}
    >
      <Typography sx={{ fontSize: { xs: '20px', sm: '25px' } }}>
        Posts
      </Typography>
      <ImageList
        sx={{
          width: { xs: 400, sm: 550 },
          height: { xs: 300, sm: 400 },
          //   rowHeight: { xs: 154, sm: 184 },
        }}
        cols={3}
        // rowHeight={164}
      >
        {postData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  )
}
