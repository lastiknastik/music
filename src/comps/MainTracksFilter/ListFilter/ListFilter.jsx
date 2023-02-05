import * as S from './styles'

function ListFilter(props) {
  let data = []

  if (props.type === 'genre') {
    //stub
    data = [
      'Рок',
      'Хип-хоп',
      'Поп-музыка',
      'Техно',
      'Инди',
      'Джаз',
      'Блюз',
      'Кантри',
    ]
  } else if (props.type === 'author') {
    //stub
    data = [
      'Michael Jackson',
      'Frank Sinatra',
      'Calvisn Harris',
      'Zhu',
      'Arctic Monkeys',
      'Ali Bakgor',
      'Tom Boxer',
    ]
  }

  let i = 0

  return (
    <S.ListFilter top={props.top} left={props.left}>
      <S.ListFilterContent>
        {data.map((item) => (
          <S.ListFilterItem key={i++}>{item}</S.ListFilterItem>
        ))}
      </S.ListFilterContent>
    </S.ListFilter>
  )
}

export default ListFilter
