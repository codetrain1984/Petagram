import React, { useState } from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material'
import useSidebar from '../Hook/useSidebar'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Link } from 'react-router-dom'

export default function Sidebar({ mode, setMode }) {
  const [open, setOpen] = useState(false)
  const { sidebarData } = useSidebar()
  return (
    <>
      <Stack
        flex={1}
        p={2}
        direction="column"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <Stack sx={{ position: 'fixed' }}>
          {sidebarData.map((side) => (
            <List>
              <Link
                to={side.link}
                style={{ textDecoration: 'none', color: 'GrayText' }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{side.icon}</ListItemIcon>
                    <ListItemText primary={side.title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          ))}
          <ListItem
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            disablePadding
          >
            <ListItemButton
              onClick={() => setOpen(!open)}
              component="a"
              href="#simple-list"
            >
              <ListItemIcon>
                {open ? (
                  <WbSunnyIcon color="warning" />
                ) : (
                  <DarkModeIcon color="primary" />
                )}
              </ListItemIcon>
              <ListItemText primary="Theme" />
            </ListItemButton>
          </ListItem>
        </Stack>
      </Stack>
    </>
  )
}
