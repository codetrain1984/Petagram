import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import Sidebar from '../Components/Sidebar'

export default function Setting() {
  return (
    <>
      <Box height="100vh" display="flex">
        <Sidebar />
        <Box flex={4}>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Typography sx={{ fontSize: { xs: '45px', sm: '80px' } }}>
            Setting
          </Typography>
        </Box>
      </Box>
    </>
  )
}
