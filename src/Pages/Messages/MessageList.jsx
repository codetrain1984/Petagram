import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import React from 'react'

export default function MessageList() {
  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 560 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="/"
              src="/Image/group/parrot.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ ml: '10px' }}
            primary="Baloo"
            secondary="Liked a message"
          />
          <Badge color="secondary" variant="dot" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="/"
              src="/Image/group/4.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ ml: '10px' }}
            primary="Pepper"
            secondary="Pepper sent a photo"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="/"
              src="/Image/group/Cat.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ ml: '10px' }}
            primary="Cheesy"
            secondary="Cheesy sent an attachment"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="/"
              src="/Image/Cute-cat.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ ml: '10px' }}
            primary="Barney"
            secondary="Liked a message"
          />
        </ListItem>
      </List>
    </div>
  )
}
