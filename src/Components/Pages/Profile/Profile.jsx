import React from 'react'
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'
import Postprofile from './Postprofile'
import Sidebar from '../../Sidebar'
import EditProfile from './EditProfile'

export default function Profile() {
  return (
    <>
      <Box width="100%" height="100vh" display="flex">
        <Box flex={1}>
          <Sidebar />
        </Box>
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

                <Link to="<EditProfile />">
                  <EditIcon color="primary" />
                </Link>

                <Link to="/setting">
                  <SettingsIcon />
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

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={4}
            mb={4}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '20px', sm: '25px' },
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
                pt={3}
                pb={3}
              >
                Friends
              </Typography>
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
          </Box>
          <Divider variant="middle" />
          <Postprofile />
        </Box>
      </Box>
    </>
  )
}
