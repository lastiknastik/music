import styled, { css } from 'styled-components'

const trackTitleImg = css`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: var(--track-title-bgcolor);
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
  stroke: var(--track-title-svg-stroke);
`
