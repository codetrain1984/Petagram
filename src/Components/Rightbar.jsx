import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material'
import React from 'react'
import RightbarLists from './RightbarLists'

export default function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position="fixed" mr={4} mt={3}>
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup max={6} sx={{ margin: '15px' }}>
          <Avatar alt="Remy Sharp" src="/Image/group/parrot.jpg" />
          <Avatar alt="Remy Sharp" src="/Image/group/pet-rabbit.jpg" />
          <Avatar alt="Remy Sharp" src="/Image/group/Cat.jpg" />
          <Avatar alt="Remy Sharp" src="/Image/group/GettyImages.jpg" />
          <Avatar alt="Remy Sharp" src="/Image/group/4.jpg" />
          <Avatar alt="Remy Sharp" src="/Image/group/4.jpg" />
          <Avatar alt="Remy Sharp" src="/Image/group/4.jpg" />
          <Avatar alt="Remy Sharp" src="/Image/group/4.jpg" />
        </AvatarGroup>
        <Typography variant="h6">Latest Photos</Typography>
        <ImageList
          cols={3}
          rowHeight={100}
          sx={{ marginTop: '20px', marginBottom: '20px' }}
        >
          <ImageListItem>
            <img src="/Image/pet.jpg" alt="/" />
          </ImageListItem>
          <ImageListItem>
            <img src="/Image/pet-birds.jpg" alt="/" />
          </ImageListItem>
          <ImageListItem>
            <img src="/Image/fish.jpg" alt="/" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6">Latest Conversations</Typography>
        <RightbarLists />
      </Box>
    </Box>
  )
}
