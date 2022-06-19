import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Container } from '@mui/material'
import ColorModeProvider from './context/ColorModeContext'

const Root = () => {
  return (
    <ColorModeProvider>
      <Container maxWidth="sm">
        <App />
      </Container>
    </ColorModeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Root />)
