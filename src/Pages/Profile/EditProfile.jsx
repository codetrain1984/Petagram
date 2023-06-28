import { Box, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../../Components/Sidebar'

export default function EditProfile() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={4}>
        <Typography variant="h2">Edit Profile</Typography>
      </Box>
    </Box>
  )
}
