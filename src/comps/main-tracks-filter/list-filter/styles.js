import styled from 'styled-components'

export const ListFilterContent = styled.div`
  & {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 28px;
    height: calc(305px - 2 * 34px);
  }
  &::-webkit-scrollbar {
    width: 4px;
    background: var(--filter-scrollbar-bgcolor);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--text-color);
  }
  & {
    ::-webkit-scrollbar-track {
      height: 4px;
    }
  }
  & div:first-of-type {
    color: #b672ff;
    text-decoration-line: underline;
  }
`

export const ListFilterItem = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
`
export const ListFilter = styled.div`
  width: 248px;
  height: 305px;
  border-radius: 12px;
  padding: 34px;
  background: var(--track-title-bgcolor);
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`
