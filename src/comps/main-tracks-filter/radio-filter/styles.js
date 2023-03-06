import styled from 'styled-components'

export const RadioFilterItemInput = styled.input`
  & {
    appearance: none;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 18px;
    height: 18px;
    border: 1px solid var(--text-color);
    border-radius: 50%;
    transform: translateY(3px);
    display: grid;
    place-content: center;
  }
  &::before {
    content: '';
    width: 10.8px;
    height: 10.8px;
    border-radius: 50%;
    transform: scale(0);
    background-color: var(--text-color);
  }
  & :checked::before {
    transform: scale(1);
  }
`

export const RadioFilterItem = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const RadioFilter = styled.div`
  height: 92px;
  border-radius: 12px;
  padding: 34px;
  background: var(--track-title-bgcolor);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 28px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`
