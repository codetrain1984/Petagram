import React from 'react'
import { useState } from 'react'
import { Button, Fab, IconButton, Stack, Tooltip } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import WbSunnyIcon from '@mui/icons-material/WbSunny'

export default function Extras() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        onClick={() => setOpen(!open)}
        title="Theme"
        sx={{
          position: 'fixed',
          bottom: 80,
          left: 30,
          width: { xs: '40px', sm: '55px' },
          height: { xs: '40px', sm: '55px' },
        }}
      >
        <IconButton color="secondary">
          {open ? <WbSunnyIcon /> : <DarkModeIcon />}
        </IconButton>
      </Tooltip>
    </>
  )
}
