import * as S from './styles'
import { AppRoutes } from '../../routes'
import { useThemeContext } from '../../context-consumers/contexts/theme'

export default function Container(props) {
  const { theme } = useThemeContext()

  return (
    <S.Container>
      <S.GlobalStyle variables={theme.variables} />
      <AppRoutes />
    </S.Container>
  )
}
