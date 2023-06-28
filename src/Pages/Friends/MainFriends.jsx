import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import React, { useState } from 'react'
import usePost from '../../Hook/usePost'
import { useParams } from 'react-router-dom'
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone'
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone'
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone'
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone'
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import Sidebar from '../../Components/Sidebar'
import Footer from '../../Components/Footer'

const followData = [
  {
    title: 'Add to close friends list',
    icon: <StarsTwoToneIcon />,
  },
  {
    title: 'Add to favorite',
    icon: <StarBorderTwoToneIcon />,
  },
  {
    title: 'Mute',
    icon: <VolumeMuteIcon />,
  },
  {
    title: 'Unfollow',
    icon: <PersonRemoveIcon />,
    color: 'red',
  },
]
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.default',
  // border: '2px solid #000',
  borderRadius: '3px',
  boxShadow: 20,
  p: 2,
}
// const StyledFollow = styled(Stack)({
//   '&:hover': { backgroundColor: 'whitesmoke' },
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   marginTop: '8px',
//   padding: '8px',
//   cursor: 'pointer',
// })
const ExraModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default function MainFriends() {
  const [messageModal, setMessageModal] = useState(false)
  const [followModal, setFollowModal] = useState(false)
  const [extra, setExtra] = useState(false)
  const { postData } = usePost()
  const params = useParams()
  const mainFrineds = postData.find((post) => post.name === params.friendName)
  const handleOpen = () => setMessageModal(true)
  const handleClose = () => setMessageModal(false)
  const handleFollow = () => setFollowModal(true)
  const handleExtra = () => setExtra(false)

  return (
    <>
      <Box display="flex" height="100vh">
        <Sidebar />
        <Box flex={4}>
          <Stack p={5} direction="row" alignItems="center">
            <Avatar
              sx={{ width: '280px', height: '280px' }}
              alt={mainFrineds.name}
              src={mainFrineds.img}
            />
            <Stack direction="column" alignItems="center">
              <Stack direction="row" alignItems="center">
                <Typography ml={5} variant="h2">
                  {mainFrineds.name}
                </Typography>

                <Stack direction="row" ml={5}>
                  {mainFrineds.status === 'follow' ? (
                    <Button variant="contained" color="primary">
                      Follow
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ textTransform: 'capitalize' }}
                      endIcon={<ArrowDropDownTwoToneIcon />}
                      onClick={() => setFollowModal(true)}
                    >
                      Following
                    </Button>
                  )}
                  <Button
                    sx={{ marginLeft: '15px', textTransform: 'capitalize' }}
                    variant="contained"
                    color="inherit"
                    onClick={handleOpen}
                  >
                    Messages
                  </Button>
                  <IconButton
                    sx={{ backgroundColor: 'lightgray', marginLeft: '15px' }}
                  >
                    <PersonAddAltTwoToneIcon color="secondary" />
                  </IconButton>
                  <IconButton
                    onClick={() => setExtra(true)}
                    sx={{ backgroundColor: 'lightgray', marginLeft: '15px' }}
                  >
                    <MoreVertIcon color="secondary" />
                  </IconButton>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={2} mt={3}>
                <Typography>{mainFrineds.post} posts</Typography>
                <Typography>{mainFrineds.followers} followers</Typography>
                <Typography>{mainFrineds.following} following</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack width="80%" mt={5}>
            <Typography variant="h4" mb={2}>
              About
            </Typography>
            <Typography>{mainFrineds.desc}</Typography>
          </Stack>
        </Box>
      </Box>
      <Footer />
      <Modal
        open={messageModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="To"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '100%' }}
            placeholder="Search"
            color="secondary"
          />
        </Box>
      </Modal>

      <Modal
        open={followModal}
        onClose={handleFollow}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack>
            <Stack spacing={1} alignItems="center" justifyContent="center">
              <Avatar
                sx={{ width: 65, height: 65 }}
                alt="/"
                src={mainFrineds.img}
              />
              <Typography color={'text.primary'}>{mainFrineds.name}</Typography>
            </Stack>
            <IconButton
              onClick={() => setFollowModal(false)}
              sx={{ position: 'absolute', top: 0, right: 5 }}
            >
              <ClearTwoToneIcon />
            </IconButton>
          </Stack>

          <Box mt={3}>
            {followData.map((data) => (
              <Box bgcolor={'background.default'} color={'text.primary'}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={data.title} />
                      <ListItemIcon>{data.icon}</ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>

      <ExraModal
        open={extra}
        onClose={handleExtra}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={'background.default'}
          color={'text.primary'}
          sx={{ width: '28%', borderRadius: '5px' }}
        >
          <Stack>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Block"
                    sx={{ textAlign: 'center', color: 'red' }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Report"
                    sx={{ textAlign: 'center', color: 'red' }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="About this account"
                    sx={{ textAlign: 'center' }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton onClick={() => setExtra(false)}>
                  <ListItemText
                    primary="Cancel"
                    sx={{ textAlign: 'center', color: 'secondary' }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Stack>
        </Box>
      </ExraModal>
    </>
  )
}
