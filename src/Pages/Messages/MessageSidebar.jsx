import { Box, IconButton, Stack, Tooltip, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import useSidebar from '../../Hook/useSidebar'

const StyledMessage = styled(Box)({
  position: 'fixed',
  height: '100%',

  justifyContent: 'space-around',
})

export default function MessageSidebar() {
  const { sidebarData } = useSidebar()
  return (
    <>
      <Box width={60}>
        <StyledMessage mx="10px" my="10px">
          {/* <Stack alignItems="center">
            <Link to="/">
              <IconButton>
                <PetsIcon />
              </IconButton>
            </Link>
          </Stack> */}
          <Stack>
            {sidebarData.map((side) => (
              <Tooltip title={side.title} placement="right">
                <Link to={side.link}>
                  <IconButton>{side.icon}</IconButton>
                </Link>
              </Tooltip>
            ))}
          </Stack>

          <Stack mt={5}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Stack>
        </StyledMessage>
      </Box>
    </>
  )
}
