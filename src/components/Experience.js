import { OpenInNew } from '@mui/icons-material'
import { Box, Button, Divider, Typography, useTheme } from '@mui/material'
import React from 'react'

const Experiencie = ({ children }) => {
  const theme = useTheme()

  return (
    <Box mt={5} sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box mb={2} sx={{ width: '110px' }}>
        <Typography
          variant="h6"
          color={theme.palette.mode === 'dark' && 'white'}
        >
          Experiencia
        </Typography>
        <Divider />
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          mt={2}
          mb={4}
          sx={{ padding: '0 2rem', alignSelf: 'flex-start' }}
          variant="body1"
          color={theme.palette.mode === 'dark' ? 'white' : 'text.secondary'}
        >
          {children}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: "100%" }}>
          <Button
            component="a"
            href="https://github.com/Gonzlezjg"
            variant="contained"
            color="secondary"
            startIcon={<OpenInNew />}
          >
            github
          </Button>
          <Button
            component="a"
            href="https://www.linkedin.com/in/jose-puerta-719b07111/"
            variant="contained"
            color="primary"
            startIcon={<OpenInNew />}
          >
           linkendin
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Experiencie
