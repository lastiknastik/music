import { PLAYLISTS } from '../../constants'
import { Link } from 'react-router-dom'
import React from 'react'
import * as S from './styles'

function SidebarItem(props) {
  return (
    <React.Fragment>
      {props.isSkeletonVisible ? (
        <S.SidebarItemSkeleton />
      ) : (
        <S.SidebarItem>
          <Link to={'/playlist/' + props.id}>
            <S.SidebarImg src={props.imgSrc} alt={props.imgAlt} />
          </Link>
        </S.SidebarItem>
      )}
    </React.Fragment>
  )
}

export default function SidebarPlaylists(props) {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        {PLAYLISTS.map((item) => {
          //my tracks playlist - it's special
          if (item.id !== 0) {
            return (
              <SidebarItem
                key={item.id}
                {...item}
                isSkeletonVisible={props.isSkeletonVisible}
              />
            )
          }
        })}
      </S.SidebarList>
    </S.SidebarBlock>
  )
}
