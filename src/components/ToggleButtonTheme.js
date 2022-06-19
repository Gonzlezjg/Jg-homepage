import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useTheme } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import { useContext } from 'react'
import { ColorModeContext } from '../context/ColorModeContext'

const ToggleButtonTheme = () => {
  const theme = useTheme()

  const colorMode = useContext(ColorModeContext)
  console.log(colorMode.colorMode)

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={colorMode.colorMode}
        style={{ display: 'inline-block' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          color="primary"
          sx={{
            height: '40px',
            width: '40px',
            borderRadius: '5px',
            backgroundColor: theme.palette.mode === 'dark' ? 'white' : '#ffe082'
          }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ToggleButtonTheme
