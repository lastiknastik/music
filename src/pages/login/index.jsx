import * as S from './styles'
import ButtonLink from '../../comps/button-link'
import InputLogin from '../../comps/input-login'
import ImageLogo from '../../comps/image-logo'
import LayoutColumn from '../../comps/layout-column'

export default function Login() {
  const formWrapperStyles = {
    width: '366px',
  }

  return (
    <S.LoginWrapper style={formWrapperStyles}>
      <ImageLogo width="140px" height="21px" />
      <LayoutColumn gap="38px" marginTop="42px">
        <InputLogin placeholder="Логин" name="login" type="text" />
        <InputLogin placeholder="Пароль" name="password" type="password" />
      </LayoutColumn>
      <ButtonLink isMain="true" marginTop="60px" to="/">
        Войти
      </ButtonLink>
      <ButtonLink marginTop="20px" to="/registr">
        Зарегистрироваться
      </ButtonLink>
    </S.LoginWrapper>
  )
}
