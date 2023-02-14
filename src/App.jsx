import * as S from './styles'
import { AppRoutes } from './routes'

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.GlobalStyle />
        <AppRoutes />
      </S.Container>
    </S.Wrapper>
  )
}

export default App
