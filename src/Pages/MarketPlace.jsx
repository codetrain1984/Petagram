import { Box, Divider, IconButton, Typography } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront'
import React from 'react'
import Sidebar from '../Components/Sidebar'

export default function MarketPlace() {
  return (
    <>
      <Box height="100vh" display="flex">
        <Sidebar />
        <Divider orientation="vertical" />
        <Box flex={4}>
          <IconButton>
            <StorefrontIcon />
          </IconButton>
          <Typography sx={{ fontSize: { xs: '45px', sm: '80px' } }}>
            MarketPlace
          </Typography>
        </Box>
      </Box>
    </>
  )
}
