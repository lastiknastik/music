import './MainNav.css'
import { useState } from 'react'
import logo from '../../img/logo.png'

function MainNav() {
  const [isMenuVisible, toggleVisibility] = useState(false)

  const handleBurgerClick = () => {
    toggleVisibility(!isMenuVisible)
  }

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo"></img>
      </div>
      <div className="nav__burger burger" onClick={handleBurgerClick}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {isMenuVisible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default MainNav
