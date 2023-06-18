import { Box, IconButton, Typography } from '@mui/material'
import Groups3Icon from '@mui/icons-material/Groups3'
import React from 'react'
import Sidebar from '../Sidebar'

export default function Groups() {
  return (
    <>
      <Box height="100vh" display="flex">
        <Sidebar />
        <Box flex={4}>
          <IconButton>
            <Groups3Icon />
          </IconButton>
          <Typography variant="h1">Groups</Typography>
        </Box>
      </Box>
    </>
  )
}
