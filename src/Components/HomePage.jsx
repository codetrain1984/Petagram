import React from 'react'
import Feed from './Feed'
import Rightbar from './Rightbar'
import { Box, Stack, useTheme } from '@mui/material'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Add from './Add'

export default function HomePage() {
  const theme = useTheme()
  console.log(theme)
  return (
    <Box bgcolor={'background.default'}>
      <Stack flex={4} direction="row" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
        <Add />
      </Stack>
      <Footer />
    </Box>
  )
}
