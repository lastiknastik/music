import './ListFilter.css'

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

  const elementPosition = { top: props.top, left: props.left }

  return (
    <div className="filter__button-list" style={elementPosition}>
      <div className="filter_button-list-content">
        {data.map((item) => (
          <div key={i++}>{item}</div>
        ))}
      </div>
    </div>
  )
}

export default ListFilter
