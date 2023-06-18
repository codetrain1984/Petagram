import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import VideocamIcon from '@mui/icons-material/Videocam'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { useState } from 'react'
import React from 'react'

export default function Add() {
  const [open, setOpen] = useState(false)

  const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })
  const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  })

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="New Post"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: 30,
          width: { xs: '40px', sm: '55px' },
          height: { xs: '40px', sm: '55px' },
        }}
      >
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ width: { xs: '300px', sm: '400px' } }}
          height={280}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="/Image/small-dog.jpg" sx={{ width: 40, height: 40 }} />
            <Typography fontWeight={500} variant="span">
              Pally
            </Typography>
          </UserBox>

          <TextField
            id="outlined-multiline-static"
            multiline
            fullWidth
            rows={4}
            placeholder="Add your new post ..."
          />
          <Stack
            direction="row"
            gap={1}
            mt={2}
            mb={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Stack direction="row" gap={1}>
              <Tooltip title="Emoji">
                <EmojiEmotionsIcon
                  sx={{ color: '#f5e60f', cursor: 'pointer' }}
                />
              </Tooltip>
              <Tooltip title="Gallery">
                <CameraAltIcon color="otherColor" cursor="pointer" />
              </Tooltip>
              <Tooltip title="Video">
                <VideocamIcon color="secondary" cursor="pointer" />
              </Tooltip>
              <Tooltip title="Add">
                <PersonAddIcon sx={{ color: '#7d827e' }} cursor="pointer" />
              </Tooltip>
            </Stack>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpen(false)}
            >
              Post
            </Button>
          </Stack>
        </Box>
      </StyledModal>
    </>
  )
}
