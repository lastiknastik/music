import { useState } from 'react'
import * as S from './styles'
import ImageLogo from '../image-logo'
import iconSprite from '../../img/icon/sprite.svg'
import { useThemeContext } from '../../context-consumers/contexts/theme'

function MainNav() {
  const [isMenuVisible, setMenuVisibility] = useState(false)

  const { theme, toggleTheme } = useThemeContext()

  const handleBurgerClick = () => {
    setMenuVisibility((prev) => !prev)
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <ImageLogo src={theme.icons.logo} width="113.33px" height="17px" />
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
            <S.MenuItem>
              <S.MenuItemTheme onClick={toggleTheme}>
                <use xlinkHref={iconSprite + theme.icons['theme-change']}></use>
              </S.MenuItemTheme>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default MainNav
