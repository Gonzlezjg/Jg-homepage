import { Box, Divider, Typography, useTheme } from '@mui/material'
import React from 'react'

const Footer = ({ children }) => {
  const theme = useTheme()

  return (
    <Box mt={5} mb={2} sx={{ display: 'flex', flexDirection: 'column' }}>
      <Divider />
      <Box>
        <Typography
          mt={2}
          sx={{ padding: '0 2rem' }}
          variant="body1"
          color={theme.palette.mode === 'dark' && 'white'}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
