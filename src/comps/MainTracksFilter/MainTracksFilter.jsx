import { useState } from 'react'
import ListFilter from './ListFilter/ListFilter'
import RadioFilter from './RadioFilter/RadioFilter'
import * as S from './style'

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
    <S.TracksFilter onClick={onClickHandler}>
      <S.TracksFilterTitle>Искать по:</S.TracksFilterTitle>
      <S.TracksFilterButton
        btnActive={filter.isPerformerFilter}
        className={`button-author filter__button`}
      >
        исполнителю
      </S.TracksFilterButton>
      {filter.isPerformerFilter && (
        <ListFilter type={'author'} top={filter.top} left={filter.left} />
      )}
      <S.TracksFilterButton
        btnActive={filter.isYearFilter}
        className={`button-year filter__button`}
      >
        году выпуска
      </S.TracksFilterButton>
      {filter.isYearFilter && (
        <RadioFilter type={'year'} top={filter.top} left={filter.left} />
      )}
      <S.TracksFilterButton
        btnActive={filter.isGenreFilter}
        className={`button-genre filter__button`}
      >
        жанру
      </S.TracksFilterButton>
      {filter.isGenreFilter && (
        <ListFilter type={'genre'} top={filter.top} left={filter.left} />
      )}
    </S.TracksFilter>
  )
}

export default MainTracksFilter
