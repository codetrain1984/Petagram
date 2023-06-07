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
  )
}

export default App
