import styled from 'styled-components'
import { btn } from '../../styles'

export const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`

export const Sidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`

export const SidebarPersonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`

export const PersonalImgSvg = styled.svg`
  ${btn}
  width: 40px;
  height: 40px;
  fill: transparent;
  stroke: var(--text-color);
`
