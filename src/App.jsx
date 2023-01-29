import './App.css'
import MainNav from './comps/MainNav/MainNav'
import MainSearch from './comps/MainSearch/MainSearch'
import MainTracksFilter from './comps/MainTracksFilter/MainTracksFilter'
import Content from './comps/Content/Content'
import Sidebar from './comps/Sidebar/Sidebar'
import PlayerBar from './comps/PlayerBar/PlayerBar'
import { useState } from 'react'

function App(props) {
  const [isSkeletonVisible, toggleSkeletonVisibility] = useState(props.loaded)

  //change skeleton visibility
  setTimeout(() => {
    toggleSkeletonVisibility(false)
  }, 5000)

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <div className="main__centerblock centerblock">
            <MainSearch />
            <h2 className="centerblock__h2">Треки</h2>
            <MainTracksFilter />
            <Content isSkeletonVisible={isSkeletonVisible} />
          </div>
          <Sidebar name="Sergey.Ivanov" isSkeletonVisible={isSkeletonVisible} />
        </main>
        <PlayerBar
          title="Ты та..."
          author="Баста"
          isSkeletonVisible={isSkeletonVisible}
        />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
