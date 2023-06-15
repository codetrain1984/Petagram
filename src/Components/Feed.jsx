<<<<<<< HEAD
import React, { useState } from 'react'
=======
import usePost from '../Hook/usePost'
import React from 'react'
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
<<<<<<< HEAD
  ListItemIcon,
  Menu,
  MenuItem,
  MenuList,
=======
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
  Typography,
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
<<<<<<< HEAD
import LinkIcon from '@mui/icons-material/Link'
import usePost from '../Hook/usePost'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import { useTrueFalse } from '../Hook/useTrueFalse'

export default function Feed() {
  const [state, toggle] = useTrueFalse(false)

  const [anchorEl, setAnchorEl] = useState(null)
  const { postData } = usePost()
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box flex={4}>
      {postData.map((post) => (
        <Card sx={{ margin: 3 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: 'red' }}
                aria-label="recipe"
                src="/Image/small-dog.jpg"
              >
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem sx={{ width: '150px' }} onClick={handleClose}>
                    <ListItemIcon>
                      <LinkIcon />
                      <Typography ml={2} variant="subtitle2">
                        Copy Link
                      </Typography>
                    </ListItemIcon>
                  </MenuItem>

                  <MenuItem sx={{ width: '150px' }} onClick={handleClose}>
                    <ListItemIcon>
                      <StarOutlineIcon />
                      <Typography ml={2} variant="subtitle2">
                        My favorite
                      </Typography>
                    </ListItemIcon>
                  </MenuItem>

                  <MenuItem sx={{ width: '150px' }} onClick={handleClose}>
                    <ListItemIcon>
                      <ReportGmailerrorredIcon color="error" />
                      <Typography ml={2} variant="subtitle2" color="error">
                        Report
                      </Typography>
                    </ListItemIcon>
                  </MenuItem>
                </Menu>
                <MoreVertIcon onClick={handleClick} />
              </IconButton>
            }
            title="Pally"
            subheader={post.date}
          />
          <CardMedia component="img" height="20%" image={post.img} alt="Pets" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.desc}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon onClick={toggle} />
            </IconButton>
            {state && (
              <MenuList>
                <MenuItem>
                  <img
                    width={30}
                    height={30}
                    src="/Share/Telegram_logo.png"
                    alt="Telegram"
                    style={{ marginLeft: '5px' }}
                  />
                  <img
                    width={30}
                    height={30}
                    src="/Share/Instagram_icon.png"
                    alt="Telegram"
                    style={{ marginLeft: '5px' }}
                  />
                  <img
                    width={30}
                    height={30}
                    src="/Share/WhatsApp_icon.png"
                    alt="Telegram"
                    style={{ marginLeft: '5px' }}
                  />
                  <img
                    width={30}
                    height={30}
                    src="/Share/linkedin-icon.png"
                    alt="Telegram"
                    style={{ marginLeft: '5px' }}
                  />
                </MenuItem>
              </MenuList>
            )}
          </CardActions>
        </Card>
=======

export default function Feed() {
  const { postData } = usePost()
  console.log(postData)
  return (
    <Box flex={4} p={2}>
      {postData.map((post) => (
        <>
          <Card sx={{ margin: 3 }}>
            <CardHeader
              avatar={
                <Avatar
                  src="/Image/small-dog.jpg"
                  sx={{ bgcolor: 'red' }}
                  aria-label="recipe"
                >
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Pally"
              subheader={post.date}
            />
            <CardMedia
              component="img"
              height="20%"
              image={post.img}
              alt="Pets"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.desc}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorderIcon />}
                  checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </>
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
      ))}
    </Box>
  )
}
