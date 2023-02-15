import { useState } from 'react'
import * as S from '../../styles'
import MainNav from '../../comps/main-nav'
import MainSearch from '../../comps/main-search'
import MainTracksFilter from '../../comps/main-tracks-filter'
import Content from '../../comps/content'
import Sidebar from '../../comps/sidebar'
import SidebarPlaylists from '../../comps/sidebar-playlists'
import PlayerBar from '../../comps/player-bar'
import React from 'react'
import { TRACKS } from '../../constants'

export default function Main() {
  const [isSkeletonVisible, toggleSkeletonVisibility] = useState(true)

  //change skeleton visibility
  setTimeout(() => {
    toggleSkeletonVisibility(false)
  }, 1000)

  return (
    <React.Fragment>
      <S.Main>
        <MainNav />
        <S.MainCenterblock>
          <MainSearch />
          <S.CenterblockH2>Треки</S.CenterblockH2>
          <MainTracksFilter />
          <Content isSkeletonVisible={isSkeletonVisible} tracksList={TRACKS} />
        </S.MainCenterblock>
        <Sidebar name="Sergey.Ivanov" isSkeletonVisible={isSkeletonVisible}>
          <SidebarPlaylists isSkeletonVisible={isSkeletonVisible} />
        </Sidebar>
      </S.Main>
      <PlayerBar
        title="Ты та..."
        author="Баста"
        isSkeletonVisible={isSkeletonVisible}
      />
      <footer></footer>
    </React.Fragment>
  )
}
