import styled from 'styled-components'

export const InputLogin = styled.input`
{
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  name: ${(props) => props.name}
  placeholder: ${(props) => props.placeholder};
  padding-bottom: 8px;
  border-bottom: 1px solid #D0CECE;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 100%;
}
&::placeholder{
  color: #e1e1e1;
}
`
