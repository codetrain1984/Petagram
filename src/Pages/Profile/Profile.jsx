import React from 'react'
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import EditIcon from '@mui/icons-material/Edit'
import { Link, useParams } from 'react-router-dom'
import Postprofile from './Postprofile'
import Sidebar from '../../Components/Sidebar'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { FriendBox, FriendsTitle } from '../../styles/profile'

export default function Profile() {
  const params = useParams()
  console.log(params)
  return (
    <>
      <Box width="100%" height="100vh" display="flex">
        <Box flex={1}>
          <Sidebar />
        </Box>
        <Divider orientation="vertical" />
        <Box flex={4}>
          <Box display="flex" justifyContent="center" p={3}>
            <Stack
              sx={{
                display: { xs: 'none', sm: 'block' },
                marginRight: '45px',
              }}
            >
              <img
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                }}
                src="/Image/small-dog.jpg"
                alt="Pally"
              />
            </Stack>
            <Stack
              sx={{ display: { xs: 'block', sm: 'none' }, marginRight: '45px' }}
            >
              <img
                style={{ width: '90px', height: '90px', borderRadius: '50%' }}
                src="/Image/small-dog.jpg"
                alt="Avatar"
              />
            </Stack>
            <Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography sx={{ fontSize: { xs: '18px', sm: '24px' } }}>
                  Pally_2015d
                </Typography>

                <Link to="/edit">
                  <Tooltip title="Edit">
                    <EditIcon color="primary" />
                  </Tooltip>
                </Link>

                <Link to="/setting">
                  <Tooltip title="Setting">
                    <SettingsIcon />
                  </Tooltip>
                </Link>
                <Link to="/addAccount">
                  <Tooltip title="Add account">
                    <PersonAddIcon />
                  </Tooltip>
                </Link>
              </Stack>
              <Stack
                sx={{ display: { xs: 'none', sm: 'block' } }}
                direction="column"
                justifyContent="center"
                spacing={1}
                mt={3}
              >
                <Typography>38 posts</Typography>
                <Typography>2169 followers</Typography>
                <Typography>278 following</Typography>
              </Stack>
              <Stack>
                <Typography variant="subtitle2">
                  Pally
                  <Divider />
                  Animals are a window to your soul
                </Typography>
              </Stack>
            </Box>
          </Box>

          <FriendBox>
            <Box>
              <FriendsTitle>Friends</FriendsTitle>
              <Stack
                sx={{ width: { xs: '80%', sm: '100%' }, display: 'flex' }}
                direction="row"
                spacing={2}
              >
                <Avatar alt="Remy Sharp" src="/Image/pet.jpg" />
                <Avatar alt="Cat" src="/Image/Cute-cat.jpg" />
                <Avatar alt="Cindy Baker" src="/Image/pet-birds.jpg" />
                <Avatar alt="Cindy Baker" src="/Image/dog-cat.jpg" />
                <Avatar alt="Cindy Baker" src="/Image/fish.jpg" />
                <Avatar
                  sizes="large"
                  alt="Cindy Baker"
                  src="/Image/group/parrot.jpg"
                />
                <Link to="/friends">
                  <IconButton sx={{ border: '2px solid gray' }}>
                    <MoreHorizOutlinedIcon fontSize="95px" />
                  </IconButton>
                </Link>
              </Stack>
            </Box>
          </FriendBox>
          <Divider variant="middle" />
          <Postprofile />
        </Box>
      </Box>
    </>
  )
}
