import React from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material'
import useSidebar from '../Hook/useSidebar'

export default function Sidebar() {
  const { sidebarData } = useSidebar()
  return (
    <>
      <Stack
        flex={1}
        p={2}
        direction="column"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        {sidebarData.map((side) => (
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{side.icon}</ListItemIcon>
                <ListItemText primary={side.title} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </Stack>
    </>
  )
}
