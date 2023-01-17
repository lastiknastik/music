import './App.css'
import MainNav from './comps/MainNav'
import MainSearch from './comps/MainSearch'
import MainTracksFilter from './comps/MainTracksFilter'
import Content from './comps/Content'
import Sidebar from './comps/Sidebar'
import PlayerBar from './comps/PlayerBar'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <div className="main__centerblock centerblock">
            <MainSearch />
            <h2 className="centerblock__h2">Треки</h2>
            <MainTracksFilter />
            <Content />
          </div>
          <Sidebar name="Sergey.Ivanov" />
        </main>
        <PlayerBar title="Ты та..." author="Баста" />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
