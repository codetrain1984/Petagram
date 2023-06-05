import './App.css'
import Feed from './Components/Feed'
import Navbar from './Components/Navbar'
import Rightbar from './Components/Rightbar'
import Sidebar from './Components/Sidebar'
import { Box, Stack } from '@mui/material'

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
