import { Box, Toolbar, styled } from '@mui/material'
import { slideInRight } from '../../animations/navbar'

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
}))
export const SearchBox = styled('div')(({ theme, searchBtn }) => ({
  backgroundColor: '#fff',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '60%',
  animation:
    searchBtn &&
    `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}))
export const IconBox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))
