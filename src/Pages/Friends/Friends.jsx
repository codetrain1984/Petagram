import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import { FaDog } from 'react-icons/fa'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import { Link } from 'react-router-dom'
import usePost from '../../Hook/usePost'
import Sidebar from '../../Components/Sidebar'
import { StyledBadge, StyledFriends } from '../../styles/friends'

export default function Friends() {
  const { postData } = usePost()
  return (
    <>
      <Box height="200vh" display="flex">
        <Sidebar />
        <Box flex={4}>
          <IconButton
            sx={{
              fontSize: { xs: '80px', sm: '580px' },
              right: { xs: '0' },
              opacity: 0.2,
              position: 'fixed',
            }}
          >
            <FaDog />
          </IconButton>
          <Typography m={2} sx={{ fontSize: { xs: '50px', sm: '70px' } }}>
            Friends
          </Typography>

          <Stack
            direction="column"
            sx={{ justifyContent: { xs: 'center' }, display: { xs: 'flex' } }}
          >
            <StyledFriends
              sx={{ width: { xs: '90%', sm: '60%' } }}
              bgcolor={'background.default'}
              border={'border.default'}
              color={'text.primary'}
              direction="row"
            >
              <Box display="flex" alignItems="center">
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    alt="Gypsy"
                    src="/puppy.jpg"
                  />
                </StyledBadge>
                <Typography ml={2} variant="body1">
                  Gypsy
                </Typography>
              </Box>
              <IconButton size="large">
                <DeleteTwoToneIcon
                  sx={{ fontSize: '28px' }}
                  color="secondary"
                />
              </IconButton>
            </StyledFriends>

            {postData.map((post) => (
              <Link
                style={{ textDecoration: 'none', color: 'GrayText' }}
                to={post.name}
              >
                <StyledFriends
                  sx={{ width: { xs: '90%', sm: '60%' } }}
                  direction="row"
                >
                  <Box
                    bgcolor={'background.default'}
                    color={'text.primary'}
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      alt="/"
                      src={post.img}
                    />
                    <Typography ml={2} variant="body1">
                      {post.name}
                    </Typography>
                  </Box>
                  <IconButton size="large">
                    <DeleteTwoToneIcon
                      sx={{ fontSize: '28px' }}
                      color="secondary"
                    />
                  </IconButton>
                </StyledFriends>
              </Link>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  )
}
