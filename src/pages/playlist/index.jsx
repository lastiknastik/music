import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { PLAYLISTS, PLAYLISTSREL } from '../../constants'
import { TRACKS } from '../../constants'
import * as S from '../../styles'
import MainNav from '../../comps/main-nav'
import MainSearch from '../../comps/main-search'
import Content from '../../comps/content'
import PlayerBar from '../../comps/player-bar'
import Sidebar from '../../comps/sidebar'
import React from 'react'

export default function Playlist(props) {
  const [isSkeletonVisible, toggleSkeletonVisibility] = useState(true)

  //change skeleton visibility
  setTimeout(() => {
    toggleSkeletonVisibility(false)
  }, 1000)

  const params = useParams()
  let tracks = []

  const playlistId = params.id || 0 //show my tracks playlist by default

  PLAYLISTSREL.map((pr) => {
    if (pr.playlistId === Number(playlistId)) {
      const track = TRACKS.find((t) => t.id === pr.trackId)
      if (track) {
        tracks.push(track)
      }
    }
  })

  const playlistTitle =
    PLAYLISTS.find((pl) => pl.id === Number(playlistId))?.title ?? 'Плейлист'

  return (
    <React.Fragment>
      <S.Main>
        <MainNav />
        <S.MainCenterblock>
          <MainSearch />
          <S.CenterblockH2>{playlistTitle}</S.CenterblockH2>
          <Content isSkeletonVisible={isSkeletonVisible} tracksList={tracks} />
        </S.MainCenterblock>
        <Sidebar name="Sergey.Ivanov" isSkeletonVisible={isSkeletonVisible} />
      </S.Main>
      <PlayerBar trackId="12" isSkeletonVisible={isSkeletonVisible} />
      <footer></footer>
    </React.Fragment>
  )
}
