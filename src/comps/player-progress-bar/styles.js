import styled, { css } from 'styled-components'

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
`

export const ProgressBarInfo = styled.div`
  letter-spacing: 0.001em;
  color: #696969;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  flext-direction: row;
  justify-content: flex-end;
`

export const ProgressBarDuration = styled.span`
  margin-bottom: 10px;
`

export const ProgressBarCursor = styled.div`
  width: 34px;
  height: 34px;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 17px;
  top: calc(-17px + 5px);
`

export const CursorTooltipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 48px;
  top: calc(-1 * (48px + 8.3px + 30px));
`
export const CursorTooltipRect = styled.div`
  width: 48px;
  height: 28px;
  background: #d9d9d9;
  border-radius: 6px;
  position: relative;
  text-align: center;
  line-height: 28px;
  color: #000000;
`

export const CursorTooltipPin = styled.div`
  width: 11.41px;
  height: 11.41px;
  background: #d9d9d9;
  transform: rotate(45deg);
  position: relative;
  top: calc(-11.41px / 2);
`
