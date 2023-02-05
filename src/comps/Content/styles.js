import styled, { css } from 'styled-components'

export const TracksList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const TracksListTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`

const col01 = css`
  width: 447px;
`

const col02 = css`
  width: 321px;
`

const col03 = css`
  width: 245px;
`

const col04 = css`
  width: 60px;
  text-align: end;
`

export const TracksListTitleCol = styled.div`
  ${(props) => {
    switch (props.colNum) {
      case 'col01':
        return col01
      case 'col02':
        return col02
      case 'col03':
        return col03
      case 'col04':
        return col04
    }
  }}
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const TracksListTimeIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
