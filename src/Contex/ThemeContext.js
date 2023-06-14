import { createTheme } from '@mui/material'
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })
  return (
    <ThemeContext.Provider value={[mode, setMode, darkTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
