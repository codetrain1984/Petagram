import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
  )
}
