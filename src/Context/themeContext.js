import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light')

  const toggle = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={[themeMode, toggle]}>
      {children}
    </ThemeContext.Provider>
  )
}
