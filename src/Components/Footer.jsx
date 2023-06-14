import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box m={3} p={2}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'GrayText',
            fontSize: '12px',
          }}
        >
          Contact
        </Link>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'GrayText',
            fontSize: '12px',
          }}
        >
          About
        </Link>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'GrayText',
            fontSize: '12px',
          }}
        >
          Blog
        </Link>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'GrayText',
            fontSize: '12px',
          }}
        >
          Help
        </Link>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'GrayText',
            fontSize: '12px',
          }}
        >
          Privacy
        </Link>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'GrayText',
            fontSize: '12px',
          }}
        >
          Terms
        </Link>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'GrayText',
            fontSize: '12px',
          }}
        >
          API
        </Link>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'GrayText',
            fontSize: '12px',
          }}
        >
          Location
        </Link>
      </Stack>
    </Box>
  )
}
