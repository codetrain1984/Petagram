import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
  )
}
