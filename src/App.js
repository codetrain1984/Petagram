<<<<<<< HEAD
import React, { useState } from 'react'
import './App.css'
import Add from './Components/Add'
import Navbar from './Components/Navbar'
import routes from './routes'

import { Box, ThemeProvider, createTheme } from '@mui/material'
import { useRoutes } from 'react-router-dom'
// import Sidebar from './Components/Sidebar'

function App() {
  const [mode, setMode] = useState('light')
  const router = useRoutes(routes)
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar mode={mode} setMode={setMode} />

        {router}

        <Add />
      </Box>
    </ThemeProvider>
=======
import { useContext } from 'react'
import './App.css'
import Add from './Components/Add'
import Feed from './Components/Feed'
import Navbar from './Components/Navbar'
import Rightbar from './Components/Rightbar'
import Sidebar from './Components/Sidebar'
import { Box, Stack } from '@mui/material'
import { ThemeContext } from './Context/themeContext'

function App() {
  // const [type, setType] = useState('light')
  // const darkTheme = createTheme({
  //   palette: {
  //     type: 'dark',
  //   },
  // })
  const [themeMode] = useContext(ThemeContext)

  return (
    <Box id={themeMode}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
  )
}

export default App
