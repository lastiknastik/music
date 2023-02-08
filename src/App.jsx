import MainNav from './comps/MainNav/MainNav'
import MainSearch from './comps/MainSearch/MainSearch'
import MainTracksFilter from './comps/MainTracksFilter/MainTracksFilter'
import Content from './comps/Content/Content'
import Sidebar from './comps/Sidebar/Sidebar'
import PlayerBar from './comps/PlayerBar/PlayerBar'
import { useState } from 'react'
import * as S from './styles'

function App(props) {
  const [isSkeletonVisible, toggleSkeletonVisibility] = useState(props.loaded)

  //change skeleton visibility
  setTimeout(() => {
    toggleSkeletonVisibility(false)
  }, 5000)

  return (
    <S.Wrapper>
      <S.GlobalStyle />
      <S.Container>
        <S.Main>
          <MainNav />
          <S.MainCenterblock>
            <MainSearch />
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <MainTracksFilter />
            <Content isSkeletonVisible={isSkeletonVisible} />
          </S.MainCenterblock>
          <Sidebar name="Sergey.Ivanov" isSkeletonVisible={isSkeletonVisible} />
        </S.Main>
        <PlayerBar
          title="Ты та..."
          author="Баста"
          isSkeletonVisible={isSkeletonVisible}
        />
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export default App
