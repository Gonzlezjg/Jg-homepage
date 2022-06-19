import { useTheme } from '@emotion/react'
import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import WorkCard from './WorkCard'
import AdjustIcon from '@mui/icons-material/Adjust'

const Work = () => {
  const theme = useTheme()

  return (
    <Box
      mt={12}
      mb={5}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box mb={2} sx={{ width: '90px' }}>
        <Typography variant="h6">Mi trabajo</Typography>
        <Divider />
      </Box>

      <Box>
        <Typography
          mt={2}
          sx={{ padding: '0 2rem' }}
          variant="body1"
          color={theme.palette.mode === 'dark' ? 'white' : 'text.secondary'}
        >
          Algunos de mis proyectos personales:
        </Typography>
      </Box>

      <WorkCard />
      <Box>
        <Typography
          mt={4}
          sx={{ padding: '0 2rem' }}
          variant="body1"
          color={theme.palette.mode === 'dark' ? 'white' : 'text.secondary'}
        >
          Encuentrame en :
        </Typography>

        <Box
          sx={{ padding: '0 2rem', display: 'flex'}}
        >
          <Button
            component="a"
            variant="text"
            color="primary"
            startIcon={<AdjustIcon />}
            href="https://www.linkedin.com/in/jose-puerta-719b07111/"
          >
            Linkedin
          </Button>
          <Button
            component="a"
            variant="text"
            color="primary"
            startIcon={<AdjustIcon />}
            href="https://github.com/gonzlezjg"
          >
            Github
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Work
