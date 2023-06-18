import { Box, IconButton, Typography } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront'
import React from 'react'
import Sidebar from '../Sidebar'

export default function MarketPlace() {
  return (
    <>
      <Box height="100vh" display="flex">
        <Sidebar />
        <Box flex={4}>
          <IconButton>
            <StorefrontIcon />
          </IconButton>
          <Typography variant="h1">MarketPlace</Typography>
        </Box>
      </Box>
    </>
  )
}
