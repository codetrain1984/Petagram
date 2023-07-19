import { Badge, Stack, styled } from '@mui/material'

export const StyledFriends = styled(Stack)({
  border: '1px solid #fff',
  boxShadow: '0px 0px 0px 0.2px rgba(0,0,0,0.75)',
  borderRadius: '50px',
  padding: { xs: '5px', sm: '7px' },
  marginTop: '20px',
  marginLeft: '15px',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
      animation: 'ripple 1.2s infinite ease-in-out',
    },
  },
}))
