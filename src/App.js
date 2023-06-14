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
  )
}

export default App
