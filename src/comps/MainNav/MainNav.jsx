import { useState } from 'react'
import logo from '../../img/logo.png'
import * as S from './styles'

function MainNav() {
  const [isMenuVisible, setMenuVisibility] = useState(false)

  const handleBurgerClick = () => {
    setMenuVisibility((prev) => !prev)
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src={logo} alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={handleBurgerClick}>
        <S.NavBurgerLine />
        <S.NavBurgerLine />
        <S.NavBurgerLine />
      </S.NavBurger>
      {isMenuVisible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink href="http://">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="http://">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default MainNav
