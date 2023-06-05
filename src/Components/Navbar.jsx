import React, { useState } from 'react'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Stack,
  Toolbar,
  Typography,
  styled,
} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'
import SearchIcon from '@mui/icons-material/Search'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'

export default function Navbar() {
  const [searchBtn, setSearchBtn] = useState(false)
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
  }))
  const SearchBox = styled('div')(({ theme }) => ({
    backgroundColor: '#fff',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '60%',
  }))
  const IconBox = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }))

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Stack
          direction="row"
          sx={{
            width: { xs: '80%', sm: '50%' },
            display: 'flex',
            alignItems: 'center',
          }}
          spacing={2}
        >
          <Typography variant="h6">Petagram</Typography>
          <SearchIcon
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => setSearchBtn(!searchBtn)}
          />
          {searchBtn && (
            <SearchBox>
              <InputBase placeholder="Search..." />
            </SearchBox>
          )}
        </Stack>

        <IconBox>
          <Badge badgeContent={4} color="otherColor">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="otherColor">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src="/Image/small-dog.jpg" />
        </IconBox>

        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
      </StyledToolbar>
    </AppBar>
  )
}
