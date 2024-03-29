import styled from 'styled-components'

export const InputSearch = styled.input`
  & {
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-color);
  }
  &::placeholder {
    background-color: transparent;
    color: var(--text-color);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
export const SearchImage = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: var(--text-color);
  fill: transparent;
`
export const Search = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
