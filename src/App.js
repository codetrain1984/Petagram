import './App.css'
import Navbar from './Components/Navbar'
import { Box, ThemeProvider, createTheme } from '@mui/material'
import routes from './routes'

import { useRoutes } from 'react-router-dom'
import { useState } from 'react'
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
      </Box>
    </ThemeProvider>
  )
}
export default App
