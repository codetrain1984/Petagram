import {
  Box,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
  keyframes,
  styled,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import MessageSidebar from './MessageSidebar'
import MessageTitle from './MessageTitle'
import MessageList from './MessageList'
import EmailIcon from '@mui/icons-material/Email'
const rotateCenter = keyframes`
0% {
  -webkit-transform: rotate(0);
          transform: rotate(0);
}
100% {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}

`

export default function Messages() {
  const [rotate, setRotate] = useState(false)
  // const [messageindex, setMessageindex] = useState(0)
  const [show, setshow] = useState(false)

  useEffect(() => {
    setTimeout(
      () => {
        setshow(true)
      },

      setTimeout(() => {
        setRotate(true)
      }, 300),
      1500,
    )
  }, [])

  const Holder = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // visibility: !rotate && 'hidden',
  })
  const Title = styled(Typography)({
    color: 'secondary',
    animation: rotate && `${rotateCenter} 0.8s ease-in-out both`,
  })

  return (
    <>
      <Box display="flex" height="95vh">
        <Stack sx={{ display: { xs: 'none', sm: 'block' } }}>
          <MessageSidebar />
          <Divider orientation="vertical" />
        </Stack>
        <Box flex={1}>
          <MessageTitle />
          <MessageList />
        </Box>
        <Divider orientation="vertical" />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} flex={4}>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <Holder>
            <Slide direction="left" in={show}>
              <Title variant="h1">Messages</Title>
            </Slide>
          </Holder>
          <Typography
            sx={{
              textAlign: 'center',
              marginTop: 30,
            }}
            variant="h5"
            alignItems={'center'}
          >
            There is no messages
          </Typography>
        </Box>
      </Box>
    </>
  )
}
