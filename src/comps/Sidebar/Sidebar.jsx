import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'
import React from 'react'
import * as S from './styles'

function SidebarItem(props) {
  return (
    <React.Fragment>
      {props.isSkeletonVisible ? (
        <S.SidebarItemSkeleton />
      ) : (
        <S.SidebarItem>
          <S.SidebarLink href="#">
            <S.SidebarImg src={props.imgSrc} alt={props.imgAlt} />
          </S.SidebarLink>
        </S.SidebarItem>
      )}
    </React.Fragment>
  )
}

function Sidebar(props) {
  let sidebarItems = [
    { imgSrc: playlist01, imgAlt: "day's playlist" },
    { imgSrc: playlist02, imgAlt: "today's 100 hits" },
    { imgSrc: playlist03, imgAlt: 'indie charge' },
  ]

  let i = 0

  return (
    <S.Sidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{props.name}</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={i++}
              {...item}
              isSkeletonVisible={props.isSkeletonVisible}
            />
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.Sidebar>
  )
}

export default Sidebar
