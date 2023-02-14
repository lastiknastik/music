import styled from 'styled-components'

export const LayoutColumn = styled.div`
  width: 278.5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => props.marginTop};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${(props) => props.gap};
`
