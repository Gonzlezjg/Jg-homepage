import { createContext, useState } from 'react'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function ColorModeProvider({ children }) {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [colorMode, setColorMode] = useState(preference ? 'dark' : 'light')

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  )
}
