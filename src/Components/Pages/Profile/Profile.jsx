import React from 'react'
import {
  Avatar,
  Box,
  Divider,
  Fab,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'
import Postprofile from './Postprofile'

export default function Profile() {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" p={5}>
        <Box display="flex" alignItems="center">
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
              alt=""
            />
          </Stack>

          <Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography sx={{ fontSize: { xs: '18px', sm: '24px' } }}>
                Pally_2015d
              </Typography>
              <IconButton>
                <EditIcon color="primary" />
              </IconButton>
            </Stack>
            <Stack
              sx={{ display: { xs: 'none', sm: 'block' } }}
              direction="row"
              spacing={2}
              mt={3}
            >
              <Typography>38 posts</Typography>
              <Typography>2169 followers</Typography>
              <Typography>278 following</Typography>
            </Stack>
            <Stack mt={3}>
              <Typography variant="subtitle2">
                Pally
                <Divider />
                Animals are a window to your soul
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Divider />
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        mt={5}
        mb={5}
        p={1}
      >
        <Typography sx={{ fontSize: { xs: '20px', sm: '25px' } }}>
          Friends
        </Typography>
        <Stack direction="row" spacing={2}>
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
          <IconButton sx={{ border: '2px solid gray' }}>
            <MoreHorizOutlinedIcon fontSize="95px" />
          </IconButton>
        </Stack>
      </Stack>
      <Divider />
      <Postprofile />
      <Stack
        sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'fixed',
          bottom: '35px',
          right: '35px',
        }}
      >
        <Tooltip>
          <Link to="/setting">
            <Fab variant="extended">
              <SettingsIcon color="primary" sx={{ mr: 1 }} />
              Setting
            </Fab>
          </Link>
        </Tooltip>
      </Stack>
    </>
  )
}
