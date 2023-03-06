import * as S from './styles'
import { AppRoutes } from './routes'
import {
  useThemeContext,
  ThemeContext,
  themes,
} from './context-consumers/contexts/theme'
import { useState } from 'react'
import Container from './comps/container'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if (currentTheme.label === themes.dark.label) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }

  return (
    <S.Wrapper>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <Container />
      </ThemeContext.Provider>
    </S.Wrapper>
  )
}

export default App
