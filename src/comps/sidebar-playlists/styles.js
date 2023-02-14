import styled, { css } from 'styled-components'

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const sidebarItem = css`
  width: 250px;
  height: 150px;
`
export const SidebarItemSkeleton = styled.div`
  ${sidebarItem}
  background-color: #313131;
  margin-bottom: 30px;
`

export const SidebarItem = styled.div`
  ${sidebarItem}
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`
