import usePost from '../Hook/usePost'
import React from 'react'
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
  Typography,
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function Feed() {
  const { postData } = usePost()
  console.log(postData)
  return (
    <Box flex={4} p={2}>
      {postData.map((post) => (
        <>
          <Card sx={{ margin: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
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
      ))}
    </Box>
  )
}
