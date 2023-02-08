import styled, { css } from 'styled-components'
import { btn } from '../../styles'

const buttonActive = css`
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
`

export const TracksFilterButton = styled.div`
  & {
    ${(props) => (props.btnActive ? buttonActive : '')}
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    user-select: none;
    ${btn}
  }
  & :not(:last-child) {
    margin-right: 10px;
  }
  & :hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  & :active {
    ${buttonActive}
  }
`

export const TracksFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`
export const TracksFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`
