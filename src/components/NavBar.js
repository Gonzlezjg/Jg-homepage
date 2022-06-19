import { Box, Link, Typography, useTheme } from '@mui/material'
import ToggleButtonTheme from './ToggleButtonTheme'

const NavBar = () => {
  const theme = useTheme()

  const pathname = window.location.pathname

  return (
    <>
      <Box
        mt={4}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography
            className="animated-logo"
            variant="h6"
            sx={{
              fontWeight: 'bold'
            }}
            color={theme.palette.mode === 'dark' && 'white'}
            mx={1}
          >
            JP
          </Typography>
          <Typography
            variant="h6"
            color={theme.palette.mode === 'dark' && 'white'}
          >
            José Puerta
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link
            href={pathname === '/work' ? '/' : '/work'}
            color="inherit"
            variant="subtitle1 "
            underline="hover"
          >
            <Typography
              mx={4}
              variant="subtitle1"
              color={theme.palette.mode === 'dark' && 'white'}
            >
              {pathname === '/work' ? 'Inicio' : 'Trabajo'}
            </Typography>
          </Link>
          <ToggleButtonTheme />
        </Box>
      </Box>
    </>
  )
}

export default NavBar
