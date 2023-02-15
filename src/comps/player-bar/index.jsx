import iconSprite from '../../img/icon/sprite.svg'
import React from 'react'
import * as S from './styles'

function PlayerBar(props) {
  return (
    <S.PlayerBar>
      <S.PlayerBarContent>
        <S.PlayerBarProgress />
        <S.PlayerBarBlock>
          <S.Player>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref={iconSprite + '#icon-prev'}></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref={iconSprite + '#icon-play'}></use>
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref={iconSprite + '#icon-next'}></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref={iconSprite + '#icon-repeat'}></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref={iconSprite + '#icon-shuffle'}></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrack>
              <S.PlayerTrackContain>
                {props.isSkeletonVisible ? (
                  <React.Fragment>
                    <S.TrackPlayImgSkeleton />
                    <S.TrackPlayAuthorSkeleton />
                    <S.TrackPlayAlbumSkeleton />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <S.TrackPlayImg>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref={iconSprite + '#icon-note'}></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImg>
                    <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink href="http://">
                        {props.title}
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">
                        {props.author}
                      </S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                  </React.Fragment>
                )}
              </S.PlayerTrackContain>

              <S.TrackPlayReactions>
                <S.TrackPlayReactionsLike>
                  <S.TrackPlayReactionsLikeSvg alt="like">
                    <use xlinkHref={iconSprite + '#icon-like'}></use>
                  </S.TrackPlayReactionsLikeSvg>
                </S.TrackPlayReactionsLike>
                <S.TrackPlayReactionsDislike>
                  <S.TrackPlayReactionsDisLikeSvg alt="dislike">
                    <use xlinkHref={iconSprite + '#icon-dislike'}></use>
                  </S.TrackPlayReactionsDisLikeSvg>
                </S.TrackPlayReactionsDislike>
              </S.TrackPlayReactions>
            </S.PlayerTrack>
          </S.Player>
          <S.PlayerBarVolumeBlock>
            <S.Volume>
              <S.VolumeImg>
                <S.VolumeImgSvg alt="volume">
                  <use xlinkHref={iconSprite + '#icon-volume'}></use>
                </S.VolumeImgSvg>
              </S.VolumeImg>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.Volume>
          </S.PlayerBarVolumeBlock>
        </S.PlayerBarBlock>
      </S.PlayerBarContent>
    </S.PlayerBar>
  )
}

export default PlayerBar
