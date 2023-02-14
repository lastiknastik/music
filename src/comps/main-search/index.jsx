import iconSprite from '../../img/icon/sprite.svg'
import * as S from './styles'

function MainSearch() {
  return (
    <S.Search>
      <S.SearchImage>
        <use xlinkHref={iconSprite + '#icon-search'}></use>
      </S.SearchImage>
      <S.InputSearch type="search" placeholder="Поиск" name="search" />
    </S.Search>
  )
}

export default MainSearch
