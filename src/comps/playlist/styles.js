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

export const TrackTitleTextSkeleton = styled.div`
  background-color: var(--track-title-bgcolor);
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
  background-color: var(--track-title-bgcolor);
`

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color);
  text-align: left;
`

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color);
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
  background-color: var(--track-title-bgcolor);
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
