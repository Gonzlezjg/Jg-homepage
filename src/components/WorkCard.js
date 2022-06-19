import { OpenInNew } from '@mui/icons-material'
import { CardActions, Typography, Grid, SvgIcon, Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import coincp from '../images/COINCP.png'
import countrySearch from '../images/countrySearch.png'
import { MongoDB, GraphQL, MaterialUI, Nodejs, ReactIcon } from '../svg/svgIcon'
import { AnimatePresence, motion } from 'framer-motion'

const dataCard = [
  {
    title: 'Country Search',
    description:
      'Aplicación web que permite buscar un país por su nombre y agruparlo por continente o idioma, utilizando GraphQl y Apollo CLient para realizar las query correspondientes.',
    image: countrySearch,
    link: 'https://github.com/Gonzlezjg/Kimche-challenge',
    icons: [GraphQL, MaterialUI, ReactIcon]
  },
  {
    title: 'CoinCp',
    description:
      'Aplicación web que permite encontrar cualquier criptomoneda, utilizando la API de coingecko, un backend realizado con Nodejs y MongoDB para la autenticación y creación de usuarios.',
    image: coincp,
    link: 'https://github.com/Gonzlezjg/crypto-coins',
    icons: [Nodejs, MongoDB, MaterialUI, ReactIcon]
  }
]

const WorkCard = () => {
  return (
    <Grid mt={4} justifyContent="center" container spacing={3}>
      {dataCard.map(({ title, description, image, icons, link }) => (
        <Grid item xs={8} md={6} key={title}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ x: -50, y: -30, opacity: 0, delay: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: 50, y: 30, opacity: 0 }}
            >
              <Card
                sx={{
                  minWidth: 260,
                  maxWidth: 280,
                  minHeight: 420,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                  >
                    {description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignSelf: 'center'
                  }}
                >
                  {icons.map(icon => (
                    <SvgIcon key={icon} component={icon} />
                  ))}
                </CardActions>
                <Button
                  component="a"
                  href={link}
                  variant="contained"
                  fullWidth
                  color="primary"
                  startIcon={<OpenInNew />}
                >
                  GITHUB
                </Button>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Grid>
      ))}
    </Grid>
  )
}

export default WorkCard
