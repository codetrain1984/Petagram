import React, { useState } from 'react'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'
import SearchIcon from '@mui/icons-material/Search'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import useSidebar from '../Hook/useSidebar'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useTrueFalse } from '../Hook/useTrueFalse'
import { IconBox, SearchBox, StyledToolbar } from '../styles/navbar'

export default function Navbar({ mode, setMode }) {
  const [searchBtn, setSearchBtn] = useTrueFalse(false)
  const [menu, setMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useTrueFalse(false)
  const { sidebarData } = useSidebar()

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Stack
            direction="row"
            sx={{
              width: { xs: '80%', sm: '50%', display: 'flex' },
              alignItems: 'center',
            }}
            spacing={2}
          >
            <Stack direction="row">
              <MenuIcon
                sx={{ display: { xs: 'block', sm: 'none' } }}
                onClick={() => setMenu(!menu)}
              />
              <Link to="/">
                <Stack
                  sx={{
                    width: { xs: '120px', sm: '150px' },
                    marginLeft: '8px',
                  }}
                >
                  <img src="/Image/Petgram-logo.png" alt="Petgram" />
                </Stack>
              </Link>
            </Stack>
          </Stack>

          <IconBox>
            {searchBtn && (
              <SearchBox searchBtn={searchBtn}>
                <InputBase placeholder="Search..." />
              </SearchBox>
            )}
            <SearchIcon
              sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
              onClick={setSearchBtn}
            />

            <Stack onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
              <IconButton
                onClick={setTheme}
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.4s',
                  '&:hover': { transform: 'scale(1.2)' },
                }}
              >
                {theme ? <WbSunnyIcon color="warning" /> : <DarkModeIcon />}
              </IconButton>
            </Stack>

            <Badge
              badgeContent={5}
              color="primary"
              sx={{
                cursor: 'pointer',
                transition: 'all 0.4s',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <MailIcon />
            </Badge>
            <Badge
              badgeContent={1}
              color="primary"
              sx={{
                cursor: 'pointer',
                transition: 'all 0.4s',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <NotificationsIcon />
            </Badge>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                cursor: 'pointer',
                transition: 'all 0.4s',
                '&:hover': { transform: 'scale(1.2)' },
              }}
              src="/Image/small-dog.jpg"
            />
          </IconBox>

          <PetsIcon
            onClick={(e) => setOpen(true)}
            sx={{
              display: { xs: 'flex', sm: 'none' },
            }}
          />
        </StyledToolbar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClick={() => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>
            <Badge badgeContent={5} color="primary">
              <MailIcon />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={5} color="primary">
              <NotificationsIcon />
            </Badge>
          </MenuItem>
          <MenuItem>
            <DarkModeIcon
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            />
          </MenuItem>
        </Menu>
      </AppBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menu}
        onClose={() => setMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {sidebarData.map((side) => (
          <Box onClick={() => setMenu(false)}>
            <Link
              to={side.link}
              style={{ textDecoration: 'none', color: '#888' }}
            >
              <Stack direction={'row'}>
                <MenuItem>{side.icon}</MenuItem>
                <MenuItem>{side.title}</MenuItem>
              </Stack>
            </Link>
          </Box>
        ))}
      </Menu>
    </>
  )
}
