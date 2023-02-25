import { useState } from 'react'
import React from 'react'
import * as S from './styles'

const PROGRESSBAR_BACKGROUND_COLOR = '#2e2e2e'

export default function PlayerProgressBar(props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [progress, setProgress] = useState({
    progressPc: 0,
    timeCode: '0:00',
  })

  const audioRef = props?.props?.current

  let durationTotal = ''

  if (audioRef) {
    const durationMin = Math.floor(audioRef.duration / 60)
    const durationSec = Math.floor(audioRef.duration % 60)
      .toString()
      .padStart(2, '0')

    durationTotal = `${durationMin}:${durationSec}`
  }

  function onMouseEnterHandler(e) {
    if (isPlaying) {
      setIsHover(true)
    }
  }

  function onMouseLeaveHandler(e) {
    setIsHover(false)
  }

  function audioTimeUpdateHandler(e) {
    if (!isPlaying) {
      setIsPlaying(true)
    }

    const audio = e.target
    const progressPc = (audio.currentTime / audio.duration) * 100

    const timeCode = `${Math.floor(audio.currentTime / 60)}:${Math.floor(
      audio.currentTime % 60
    )
      .toString()
      .padStart(2, '0')}`

    setProgress({ progressPc: progressPc, timeCode: timeCode })
  }

  audioRef?.addEventListener('timeupdate', audioTimeUpdateHandler)

  return (
    <React.Fragment>
      <S.ProgressBarInfo>
        {isPlaying === true ? (
          <S.ProgressBarDuration>
            <span>{progress.timeCode}</span> / <span>{durationTotal}</span>
          </S.ProgressBarDuration>
        ) : (
          ''
        )}
      </S.ProgressBarInfo>
      <S.ProgressBar
        style={{
          background: isPlaying
            ? `linear-gradient(to right, #b672ff ${progress.progressPc}%, ${
                PROGRESSBAR_BACKGROUND_COLOR + ' ' + progress.progressPc
              }%)`
            : PROGRESSBAR_BACKGROUND_COLOR,
          height: isHover ? '10px' : '5px',
        }}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {isHover ? (
          <React.Fragment>
            <S.ProgressBarCursor
              style={{ left: `calc(${progress.progressPc}% - 17px` }}
            />
            <S.CursorTooltipWrapper
              style={{ left: `calc(${progress.progressPc}% - 24px` }}
            >
              <S.CursorTooltipRect>{progress.timeCode}</S.CursorTooltipRect>
              <S.CursorTooltipPin />
            </S.CursorTooltipWrapper>
          </React.Fragment>
        ) : (
          ''
        )}
      </S.ProgressBar>
    </React.Fragment>
  )
}
