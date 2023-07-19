import { IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import ShareIcon from '@mui/icons-material/Share'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

export default function FeedShare() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <ShareIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <WhatsAppIcon color="primary" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {' '}
            <TelegramIcon color="primary" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <InstagramIcon color="primary" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <LinkedInIcon color="primary" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <TwitterIcon color="primary" />
          </MenuItem>
        </Menu>
      </div>
    </>
  )
}
