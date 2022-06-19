import Profile from '../components/Profile'
import Technologies from '../components/Technologies'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../components/Footer'
import Bio from '../components/Bio'
import Experiencie from '../components/Experience'

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -50, y: -20, opacity: 0, delay: 0.5 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 50, y: 20, opacity: 0 }}
      >
        <Profile />
        <Bio>
          He comenzado en el mundo de la{' '}
          <span style={{ color: '#3f51b5' }}>programación</span> hace unos años,
          empece a aprender de forma autodidacta. Al año de haber empezado a ser
          autodidacta conseguí mi primer empleo en una empresa de desarrollo de
          software. Actualmente me dedico al desarrollo fullstack, tambien he
          participado en proyectos blockchain.
        </Bio>
        <Experiencie>
          Poseo 2 años de experiencia trabajando con Javascript.
        </Experiencie>
        <Technologies />
        <Footer>
          Jose Puerta - ©2022 Derechos reservados. Hecho con{' '}
          <span style={{ color: '#3f51b5' }}>❤</span>
        </Footer>
      </motion.div>
    </AnimatePresence>
  )
}

export default Home
