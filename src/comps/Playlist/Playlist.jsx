import iconSprite from '../../img/icon/sprite.svg'
import React from 'react'
import * as S from './styles'

function PlaylistItem(props) {
  return (
    <S.PlaylistItem>
      <S.Track>
        {props.isSkeletonVisible ? (
          <React.Fragment>
            <S.TrackTitle>
              <S.TrackTitleImgSkeleton />
              <S.TrackTitleTextSkeleton />
            </S.TrackTitle>
            <S.TrackAuthorSkeleton />
            <S.TrackAlbumSkeleton />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref={iconSprite + '#icon-note'}></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <div>
                <S.TrackTitleLink href="http://">
                  {props.title}
                  <S.TrackTitleSpan>{props.titleSpan}</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                {props.author}
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">{props.albom}</S.TrackAlbumLink>
            </S.TrackAlbum>
            <div>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref={iconSprite + 'icon-like'}></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>{props.time}</S.TrackTimeText>
            </div>
          </React.Fragment>
        )}
      </S.Track>
    </S.PlaylistItem>
  )
}

function Playlist(props) {
  const tracks = [
    { title: 'Guilt', author: 'Nero', albom: 'Welcome Reality', time: '4:44' },
    {
      title: 'Elektro',
      author: 'Dynoro, Outwork, Mr. Gee',
      albom: 'Elektro',
      time: '2:22',
    },
    {
      title: 'I’m Fire ',
      titleSpan: '(Remix)',
      author: 'Ali Bakgor',
      albom: 'I’m Fire',
      time: '2:22',
    },
    {
      title: 'Non Stop ',
      titleSpan: '(Remix)',
      author: 'Стоункат, Psychopath',
      albom: 'Non Stop',
      time: '4:12',
    },
    {
      title: 'Run Run ',
      titleSpan: '(feat. AR/CO)',
      author: 'Jaded, Will Clarke, AR/CO',
      albom: 'Run Run',
      time: '2:54',
    },
    {
      title: 'Eyes on Fire ',
      titleSpan: '(Zeds Dead Remix)',
      author: 'Blue Foundation, Zeds Dead',
      albom: 'Eyes on Fire',
      time: '5:20',
    },
    {
      title: 'Mucho Bien ',
      titleSpan: '(Hi Profile Remix)',
      author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
      albom: 'Mucho Bien',
      time: '3:41',
    },
    {
      title: 'Knives n Cherries ',
      author: 'minthaze',
      albom: 'Captivating',
      time: '1:48',
    },
    {
      title: 'How Deep Is Your Love',
      author: 'Calvin Harris, Disciples',
      albom: 'How Deep Is Your Love',
      time: '3:32',
    },
    {
      title: 'Morena',
      author: 'Tom Boxer',
      albom: 'Soundz Made in Romania',
      time: '3:36',
    },
  ]

  let i = 0

  return (
    <S.Playlist>
      {tracks.map((track) => (
        <PlaylistItem
          key={i++}
          {...track}
          isSkeletonVisible={props.isSkeletonVisible}
        />
      ))}
    </S.Playlist>
  )
}

export default Playlist
