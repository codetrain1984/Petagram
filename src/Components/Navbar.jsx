import React from 'react'
import { AppBar, Toolbar, Typography, styled } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'

export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f59842',
  })
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Petagram
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
      </StyledToolbar>
    </AppBar>
  )
}
