import { useRef, useState } from 'react'
import iconSprite from '../../img/icon/sprite.svg'
import React from 'react'
import * as S from './styles'
import { TRACKS } from '../../constants'
import PlayerProgressBar from '../player-progress-bar'

function PlayerBar(props) {
  const track = TRACKS.find((t) => t.id === Number(props.trackId)) //hardcoded value

  const audioRef = useRef(null)
  //const progressBarRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

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

  /*
  let progress = 0
  function audioTimeUpdateHandler(e) {
    const audio = e.target
    progress = (audio.currentTime / audio.duration) * 100

    progressBarRef.current.style.background = `linear-gradient(to right, #b672ff ${progress}%, ${
      PROGRESSBAR_BACKGROUND_COLOR + ' ' + progress
    }%)`
  }
  */

  return (
    <S.PlayerBar>
      <PlayerProgressBar props={audioRef} />
      <S.PlayerBarContent>
        <audio src={track.src} ref={audioRef} />
        {/*
  <S.PlayerBarProgress
          ref={progressBarRef}
          style={{ background: PROGRESSBAR_BACKGROUND_COLOR }}
        />
   */}

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
                        {track.title}
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">
                        {track.author}
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
