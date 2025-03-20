import React from 'react'
import './App.css'
import theme from './config/theme'
import { CssBaseline,ThemeProvider } from '@mui/material'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
    </ThemeProvider>
  )
}

export default App
