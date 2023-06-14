import React from 'react'
import Feed from './Feed'
import Rightbar from './Rightbar'
import { Box, Stack } from '@mui/material'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function HomePage() {
  return (
    <Box bgcolor={'background.default'}>
      <Stack flex={4} direction="row" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Footer />
    </Box>
  )
}
