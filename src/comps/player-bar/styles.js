import styled, { css } from 'styled-components'
import { btn } from '../../styles'

export const PlayerBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`
export const PlayerBarContent = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--main-bgcolor) /* rgba(28, 28, 28, 0.5)*/;
`

export const PlayerBarBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Player = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const PlayerBarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`

export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

export const Volume = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`

export const VolumeImg = styled.div`
  width: 15px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeImgSvg = styled.svg`
  width: 15px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgress = styled.div`
  width: 109px;
  display: flex;
  ${btn}
`
export const VolumeProgressLine = styled.input`
  width: 109px;
  -webkit-appearance: none;
  background: var(--volume-slider-runnable-track);
  ${btn}
  background-image: linear-gradient(var(--volume-progress-bgcolor), var(--volume-progress-bgcolor));
  background-size: 50% 100%;
  background-repeat: no-repeat;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid var(--volume-slider-thumb-border);
    height: 12px;
    width: 12px;
    border-radius: 12px;
    background: var(--volume-slider-thumb-bgcolor);
    cursor: pointer;
    margin-top: -5px;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: transparent;
  }
`
const button = css`
  padding: 5px;
  display: flex;
  align-items: center;
`

export const TrackPlayReactionsLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: var(--progressbar-player-icon-regular);
`

export const TrackPlayReactionsDisLikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: var(--progressbar-player-icon-regular);
`

const buttonIcon = css`
  &:active svg {
    stroke: var(--progressbar-player-btn-active);
    fill: var(--progressbar-player-btn-active);
    cursor: pointer;
  }
  &:hover svg {
    fill: var(--progressbar-player-btn-hover);
    stroke: var(--progressbar-player-btn-hover);
    cursor: pointer;
  }
  &:active ${TrackPlayReactionsLikeSvg} {
    fill: var(--progressbar-player-reaction-active-fill);
    stroke: var(--progressbar-player-reaction-active-stroke);
    cursor: pointer;
  }
  &:hover ${TrackPlayReactionsLikeSvg} {
    fill: transparent;
    stroke: var(--progressbar-player-btn-hover);
    cursor: pointer;
  }
  &:active ${TrackPlayReactionsDisLikeSvg} {
    fill: var(--progressbar-player-reaction-active-fill);
    stroke: var(--progressbar-player-reaction-active-stroke);
    cursor: pointer;
  }
  &:hover ${TrackPlayReactionsDisLikeSvg} {
    fill: transparent;
    stroke: var(--progressbar-player-btn-hover);
    cursor: pointer;
  }
`

export const PlayerBtnPrev = styled.div`
  ${button}
  margin-right: 23px;
  ${btn}
`
export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: var(--progressbar-player-btn-regular);
  stroke: var(--progressbar-player-btn-regular);
`

export const PlayerBtnPlay = styled.div`
  ${buttonIcon}
  ${button}
  margin-right: 23px;
  ${btn}
`

export const PlayerBtnNext = styled.div`
  ${button}
  margin-right: 28px;
  ${btn}
`
export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: var(--progressbar-player-btn-regular);
  stroke: var(--progressbar-player-btn-regular);
`
export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: var(--progressbar-player-icon-regular);
  stroke: var(--progressbar-player-icon-regular);
`

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: var(--progressbar-player-btn-regular);
  stroke: var(--progressbar-player-btn-regular);
`

export const PlayerBtnRepeat = styled.div`
  ${buttonIcon}
  ${button}
  margin-right: 24px;
`

export const PlayerBtnShuffle = styled.div`
  ${buttonIcon}
  ${button}
  display: flex;
  align-items: center;
`

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: var(--progressbar-player-icon-regular);
  stroke: var(--progressbar-player-icon-regular);
`
export const PlayerTrack = styled.div`
  display: flex;
  flex-direction: row;
`

export const PlayerTrackContain = styled.div`
  width: auto;
  display: flex;
  align-items: center;
`

export const TrackPlayAuthorSkeleton = styled.div`
  background-color: var(--track-title-bgcolor);
  width: 49px;
  height: 1em;
`
export const TrackPlayAlbumSkeleton = styled.div`
  background-color: var(--track-title-bgcolor);
  width: 49px;
  height: 1em;
`
export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackPlayAuthor = styled.div`
  grid-row: 1;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
`
export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color);
  white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  grid-row: 2;
  -ms-grid-column: 2;
  grid-column: 2;
  grid-area: album;
  min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: var(--text-color);
`
export const TrackPlayReactions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`

export const TrackPlayReactionsLike = styled.div`
  ${buttonIcon}
  padding: 5px;
`

export const TrackPlayReactionsDislike = styled.div`
  ${buttonIcon}
  padding: 5px;
  margin-left: 28.5px;
`
