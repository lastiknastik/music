import { useRef, useState } from 'react'
import iconSprite from '../../img/icon/sprite.svg'
import React from 'react'
import * as S from './styles'
import { TRACKS } from '../../constants'
import PlayerProgressBar from '../player-progress-bar'
import TrackCover from '../track-cover'
import { useThemeContext } from '../../context-consumers/contexts/theme'

function PlayerBar(props) {
  const { theme } = useThemeContext()

  const track = TRACKS.find((t) => t.id === Number(props.trackId)) //hardcoded value

  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

  function getCurrentVolume(target) {
    const min = target.min
    const max = target.max
    const val = target.value

    return ((val - min) * 100) / (max - min)
  }

  function onVolurmeInputHandler(e) {
    const target = e.target

    target.style.backgroundSize = getCurrentVolume(target) + '% 100%'
  }

  function btnPlayClickHandler(e) {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying((prev) => {
      return !prev
    })
  }

  return (
    <S.PlayerBar>
      <PlayerProgressBar props={audioRef} />
      <S.PlayerBarContent>
        <audio src={track.src} ref={audioRef} />
        <S.PlayerBarBlock>
          <S.Player>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref={iconSprite + '#icon-prev'}></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay onClick={btnPlayClickHandler}>
                <S.PlayerBtnPlaySvg alt={isPlaying ? 'pause' : 'play'}>
                  <use
                    xlinkHref={
                      iconSprite + (isPlaying ? '#icon-pause' : '#icon-play')
                    }
                  ></use>
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
                    <TrackCover isSkeletonVisible={props.isSkeletonVisible} />
                    <S.TrackPlayAuthorSkeleton />
                    <S.TrackPlayAlbumSkeleton />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <TrackCover isSkeletonVisible={props.isSkeletonVisible} />
                    <div>
                      <S.TrackPlayAuthor>
                        <S.TrackPlayAuthorLink href="http://">
                          {track.title}
                        </S.TrackPlayAuthorLink>
                      </S.TrackPlayAuthor>
                      <S.TrackPlayAlbum>
                        <S.TrackPlayAlbumLink href="http://">
                          {track.author}
                        </S.TrackPlayAlbumLink>
                      </S.TrackPlayAlbum>
                    </div>
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
                  <use xlinkHref={iconSprite + theme.icons.volume}></use>
                </S.VolumeImgSvg>
              </S.VolumeImg>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  min="0"
                  max="100"
                  volume="50"
                  type="range"
                  name="range"
                  onInput={onVolurmeInputHandler}
                />
              </S.VolumeProgress>
            </S.Volume>
          </S.PlayerBarVolumeBlock>
        </S.PlayerBarBlock>
      </S.PlayerBarContent>
    </S.PlayerBar>
  )
}

export default PlayerBar
