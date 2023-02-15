import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const btnMain = css`
   {
    background: #580ea2;
    color: #ffffff;
  }
  &:hover {
    background: #3f007d;
  }
  &:active {
    background: #271a58;
  }
`

const btnRegular = css`
   {
    border: 1px solid #d0cece;
    color: #000000;
  }
  &:hover {
    background: #d0cece;
  }
  &:active {
    background: #d9d9d9;
  }
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
  width: 278px;
  height: 52px;
  border-radius: 6px;
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 52px;
  text-align: center;
  margin-top: ${(props) => props.marginTop};
  margin-left: auto;
  margin-right: auto;
  ${(props) => (props.isMain === 'true' ? btnMain : btnRegular)}
`
