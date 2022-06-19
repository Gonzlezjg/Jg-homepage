import { Box, Divider, Typography, useTheme } from '@mui/material'
import React from 'react'

const Bio = ({ children }) => {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box mb={2} sx={{ width: '85px' }}>
        <Typography variant="h6">Sobre mí</Typography>
        <Divider />
      </Box>
      <Box>
        <Typography
          mt={2}
          sx={{ padding: '0 2rem' }}
          variant="body1"
          color={theme.palette.mode === 'dark' ? 'white' : 'text.secondary'}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  )
}

export default Bio
