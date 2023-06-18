import React, { useState } from 'react'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Toolbar,
  styled,
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

export default function Navbar({ mode, setMode }) {
  const [searchBtn, setSearchBtn] = useTrueFalse(false)
  const [menu, setMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useTrueFalse(false)
  const { sidebarData } = useSidebar()

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
              <SearchBox>
                <InputBase placeholder="Search..." />
              </SearchBox>
            )}
            <SearchIcon
              sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
              onClick={setSearchBtn}
            />

            <Stack onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
              <IconButton onClick={setTheme}>
                {theme ? <WbSunnyIcon color="warning" /> : <DarkModeIcon />}
              </IconButton>
            </Stack>

            <Badge badgeContent={5} color="primary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={1} color="primary">
              <NotificationsIcon />
            </Badge>
            <Avatar sx={{ width: 40, height: 40 }} src="/Image/small-dog.jpg" />
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
          onClose={() => setOpen(false)}
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
      {menu && (
        <Paper
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={menu}
          onClose={() => setMenu(false)}
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
            width: '40%',
            position: 'fixed',
            zIndex: '9999',
            marginTop: '2px',
          }}
        >
          {sidebarData.map((sidebar) => (
            <Stack>
              <MenuList>
                <Link
                  to={sidebar.link}
                  style={{ textDecoration: 'none', color: 'GrayText' }}
                >
                  <MenuItem onClose={() => setMenu(false)}>
                    <ListItemIcon>{sidebar.icon}</ListItemIcon>
                    <ListItemText>{sidebar.title}</ListItemText>
                  </MenuItem>
                </Link>
              </MenuList>
            </Stack>
          ))}
        </Paper>
      )}
    </>
  )
}
