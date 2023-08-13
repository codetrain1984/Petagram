import './App.css'
import Navbar from './Components/Navbar'
import { Box, IconButton, ThemeProvider, createTheme } from '@mui/material'
import routes from './routes'

import { useRoutes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
// import Sidebar from './Components/Sidebar'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mode, setMode] = useState(() => {
    let localData = localStorage.getItem('darkMode')
    if (localData) {
      return localData
    }
    return 'light'
  })
  const router = useRoutes(routes)
  console.log(mode)
  useEffect(() => {
    localStorage.setItem('darkMode', mode)
  }, [mode])

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })
  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar mode={mode} setMode={setMode} />
        {router}
      </Box>

      <IconButton
        sx={{
          position: 'fixed',
          padding: 2,
          bottom: 20,
          right: 40,
          backgroundColor: 'purple',
        }}
        onClick={handleScroll}
      >
        <ArrowDropUpIcon sx={{ color: 'white' }} />
      </IconButton>
    </ThemeProvider>
  )
}
export default App
