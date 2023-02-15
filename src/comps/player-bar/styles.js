import styled, { css } from 'styled-components'
import { btn } from '../../styles'

export const PlayerBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const PlayerBarContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const PlayerBarProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
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
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeImgSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgress = styled.div`
  width: 109px;
  ${btn}
`
export const VolumeProgressLine = styled.input`
  width: 109px;
  ${btn}
`
const button = css`
  padding: 5px;
  display: flex;
  align-items: center;
`

export const PlayerBtnPrev = styled.div`
  ${button}
  margin-right: 23px;
  ${btn}
`
export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerBtnPlay = styled.div`
  ${button}
  margin-right: 23px;
  ${btn}
`

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const PlayerBtnNext = styled.div`
  ${button}
  margin-right: 28px;
  fill: #a53939;
  ${btn}
`
export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`
export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

const trackPlayImg = css`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-row: 1;
  grid-column: 1;
  grid-area: image;
`
export const TrackPlayImg = styled.div`
  ${trackPlayImg}
`

export const TrackPlayImgSkeleton = styled.div`
  ${trackPlayImg}
`

export const TrackPlayReactionsLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const TrackPlayReactionsDisLikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`

const buttonIcon = css`
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active ${TrackPlayReactionsLikeSvg} {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  &:active ${TrackPlayReactionsDisLikeSvg} {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
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
  fill: transparent;
  stroke: #696969;
`
export const PlayerTrack = styled.div`
  display: flex;
  flex-direction: row;
`

export const PlayerTrackContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`

export const TrackPlayAuthorSkeleton = styled.div`
  background-color: #313131;
  width: 49px;
  height: 1em;
`
export const TrackPlayAlbumSkeleton = styled.div`
  background-color: #313131;
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
  color: #ffffff;
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
  color: #ffffff;
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
