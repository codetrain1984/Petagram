import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
=======
import { ThemeProvider } from './Context/themeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
)
