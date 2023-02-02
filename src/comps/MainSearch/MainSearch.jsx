import './MainSearch.css'
import iconSprite from '../../img/icon/sprite.svg'

function MainSearch() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref={iconSprite + '#icon-search'}></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      ></input>
    </div>
  )
}

export default MainSearch
