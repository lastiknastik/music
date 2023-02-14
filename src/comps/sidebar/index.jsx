import React from 'react'
import * as S from './styles'

function Sidebar(props) {
  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{props.name}</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      {props.children}
    </S.Sidebar>
  )
}

export default Sidebar
