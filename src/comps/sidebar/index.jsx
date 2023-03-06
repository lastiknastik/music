import React from 'react'
import * as S from './styles'
import iconSprite from '../../img/icon/sprite.svg'

function Sidebar(props) {
  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.PersonalImgSvg alt="volume">
          <use xlinkHref={iconSprite + '#icon-logout'}></use>
        </S.PersonalImgSvg>
      </S.SidebarPersonal>
      {props.children}
    </S.Sidebar>
  )
}

export default Sidebar
