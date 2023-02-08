import styled, { css } from 'styled-components'

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`

export const Track = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`

const trackTitleImg = css`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`

export const TrackTitleImg = styled.div`
  ${trackTitleImg}
`
export const TrackTitleImgSkeleton = styled.div`
  ${trackTitleImg}
`
export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackTitleTextSkeleton = styled.div`
  background-color: #313131;
  width: 100%;
  height: 1em;
`

const trackAuthor = css`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`

export const TrackAuthor = styled.div`
  ${trackAuthor}
`

export const TrackAuthorSkeleton = styled.div`
  ${trackAuthor}
  height: 1em;
  background-color: #313131;
`

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`

const trackAlbum = css`
  width: 245px;
`

export const TrackAlbum = styled.div`
  ${trackAlbum}
`

export const TrackAlbumSkeleton = styled.div`
  ${trackAlbum}
  height: 1em;
  background-color: #313131;
`

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
