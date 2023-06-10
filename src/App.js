import React from 'react'
import './App.css'
import Add from './Components/Add'
import Feed from './Components/Feed'
import Navbar from './Components/Navbar'
import Rightbar from './Components/Rightbar'
import Sidebar from './Components/Sidebar'
import { Box, Stack } from '@mui/material'

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </>
  )
}

export default App
