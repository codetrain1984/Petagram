import { Box, Typography, styled } from '@mui/material'

export const FriendsTitle = styled(Typography)({
  fontSize: { xs: '20px', sm: '25px' },
  textAlign: 'center',
  marginBottom: '10px',
  paddingTop: 3,
  paddingBottom: 3,
})
export const FriendBox = styled(
  Box({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 4,
  }),
)
