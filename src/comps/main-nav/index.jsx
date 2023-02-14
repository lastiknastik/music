import { useState } from 'react'
import * as S from './styles'
import logo from '../../img/logo.png'
import ImageLogo from '../image-logo'
import { Link } from 'react-router-dom'

function MainNav() {
  const [isMenuVisible, setMenuVisibility] = useState(false)

  const handleBurgerClick = () => {
    setMenuVisibility((prev) => !prev)
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <ImageLogo src={logo} width="113.33px" height="17px" />
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
              <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/mytracks">Мои треки</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="http://">Выйти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default MainNav
