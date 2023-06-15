import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
<<<<<<< HEAD
  Stack,
} from '@mui/material'
import useSidebar from '../Hook/useSidebar'

import { Link } from 'react-router-dom'

export default function Sidebar({ mode, setMode }) {
  const { sidebarData } = useSidebar()
  return (
    <>
      <Box
        flex={1}
        p={2}
        direction="column"
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Stack
          sx={{
            position: 'fixed',
            zIndex: '9999',
          }}
        >
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
        </Stack>
      </Box>
    </>
=======
} from '@mui/material'
import useSidebar from '../Hook/useSidebar'

export default function Sidebar() {
  const { sidebarData } = useSidebar()
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        {sidebarData.map((sidebar) => (
          <List sx={{ '&:hover': { color: '#9c058a' } }}>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={'a'} href="#">
                <ListItemIcon>{sidebar.icon}</ListItemIcon>
                <ListItemText primary={sidebar.title} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </Box>
    </Box>
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
  )
}
