import { Box, Divider, Typography, useTheme } from '@mui/material'
import React from 'react'

const myTecnologies = [
  {
    tech: 'React',
    description:
      'Poseo experiencia utilizando todo el entorno de React y Next, manejo de estados, eventos, estados globales y diferentes librerías.'
  },
  {
    tech: 'Apollo',
    description: 'He utilizado apollo client en diferentes proyectos.'
  },
  {
    tech: 'Estilos',
    description:
      'Amplia experiencia con CSS, SASS, MaterialUI y Tailwind.'
  },
  {
    tech: 'Node.js',
    description:
      'He creado diferentes tipos de servicios utilizando Node y Express, desde API rest, microservicios, hasta manejo de pasarelas de pago.'
  },
  {
    tech: 'DB',
    description:
      'Manejo de bases de datos, he utilizado desde; Mysql, MongoDB, Firebase.'
  }
]

const Technologies = () => {
  const theme = useTheme()

  return (
    <Box mt={5} sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box mb={2} sx={{ width: '110px' }}>
        <Typography
          variant="h6"
          color={theme.palette.mode === 'dark' && 'white'}
        >
          Tecnologías
        </Typography>
        <Divider />
      </Box>
      {myTecnologies.map(({ tech, description, index }) => (
        <Box
          mt={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
          }}
          key={index}
        >
          <Typography
            sx={{
              width: '25%',
              padding: '0 2rem',
              fontWeight: 'bold',
              mb: 5,
              textTransform: 'capitalize',
              textAlign: "left"
            }}
            variant="body1"
            color="primary"
          >
            {tech}
          </Typography>
          <Typography
            sx={{ padding: '0 2rem', textAlign: 'left', width: "75%" }}
            variant="body2"
            color={theme.palette.mode === 'dark' ? 'white' : 'text.secondary'}
          >
            {description}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default Technologies
