import { useState } from 'react'
import ListFilter from './ListFilter/ListFilter'
import RadioFilter from './RadioFilter/RadioFilter'
import './MainTracksFilter.css'

function MainTracksFilter() {
  const [filter, setFilter] = useState({
    visibleFilter: null,
    isPerformerFilter: false,
    isYearFilter: false,
    isGenreFilter: false,
    top: 0,
    left: 0,
  })

  let onClickHandler = (e) => {
    let target = e.target
    let clickedFilter = null
    let filterPosition = { top: 0, left: 0 } //initial values

    if (target.classList.contains('filter__button')) {
      filterPosition = {
        top: target.offsetTop + target.offsetHeight + 10,
        left: target.offsetLeft,
      }

      if (target.classList.contains('button-author')) {
        clickedFilter = 'button-author'
      } else if (target.classList.contains('button-year')) {
        clickedFilter = 'button-year'
      } else if (target.classList.contains('button-genre')) {
        clickedFilter = 'button-genre'
      }

      setFilter((prevState) => {
        const filterToShow =
          prevState.visibleFilter !== clickedFilter ? clickedFilter : null

        return {
          visibleFilter: filterToShow,
          isPerformerFilter: filterToShow === 'button-author',
          isYearFilter: filterToShow === 'button-year',
          isGenreFilter: filterToShow === 'button-genre',
          top: filterPosition.top,
          left: filterPosition.left,
        }
      })
    }
  }

  return (
    <div className="centerblock__filter filter" onClick={onClickHandler}>
      <div className="filter__title">Искать по:</div>
      <div
        className={`filter__button button-author _btn-text ${
          filter.isPerformerFilter ? '_btn-active' : ''
        }`}
      >
        исполнителю
      </div>
      {filter.isPerformerFilter && (
        <ListFilter type={'author'} top={filter.top} left={filter.left} />
      )}
      <div
        className={`filter__button button-year _btn-text ${
          filter.isYearFilter ? '_btn-active' : ''
        }`}
      >
        году выпуска
      </div>
      {filter.isYearFilter && (
        <RadioFilter type={'year'} top={filter.top} left={filter.left} />
      )}
      <div
        className={`filter__button button-genre _btn-text ${
          filter.isGenreFilter ? '_btn-active' : ''
        }`}
      >
        жанру
      </div>
      {filter.isGenreFilter && (
        <ListFilter type={'genre'} top={filter.top} left={filter.left} />
      )}
    </div>
  )
}

export default MainTracksFilter
