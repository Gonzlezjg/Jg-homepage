import { Box } from '@mui/material'
import NavBar from './components/NavBar'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { myTheme } from './theme/theme'
import { useMemo, useContext } from 'react'
import { ColorModeContext } from './context/ColorModeContext'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './components/Work'

function App() {
  const { colorMode } = useContext(ColorModeContext)

  const theme = useMemo(() => createTheme(myTheme(colorMode)), [colorMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: 1
        }}
      >
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App
