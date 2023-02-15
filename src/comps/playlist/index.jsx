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
  return (
    <S.Playlist>
      {props.tracksList.map((track) => (
        <PlaylistItem
          key={track.id}
          {...track}
          isSkeletonVisible={props.isSkeletonVisible}
        />
      ))}
    </S.Playlist>
  )
}

export default Playlist
