import { Box, Divider, Typography, useTheme } from '@mui/material'
import jose from '../images/jose.jpeg'

const Profile = () => {
  const theme = useTheme()

  return (
    <Box
      mt={12}
      mb={5}
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Typography
          variant="h6"
          color={theme.palette.mode === 'dark' && 'white'}
        >
          Hola, Soy José Puerta
        </Typography>
        <Divider />
        <Typography
          sx={{ display: 'flex' }}
          variant="subtitle1"
          color={theme.palette.mode === 'dark' && 'white'}
        >
          Desarrollador &nbsp;
          <Typography variant="subtitle1" color="primary">
            Fullstack
          </Typography>
        </Typography>
      </Box>
      <Box>
        <img
          src={jose}
          alt="José Puerta"
          width={120}
          height={120}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  )
}

export default Profile
