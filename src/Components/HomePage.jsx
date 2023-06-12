import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Rightbar from './Rightbar'
import { Stack } from '@mui/material'

export default function HomePage() {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </div>
  )
}
