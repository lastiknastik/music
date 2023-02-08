import * as S from './styles.js'

function RadioFilter(props) {
  //stub
  let data = []

  if (props.type === 'year') {
    data = [
      { id: 'newer', label: 'Более новые', name: props.type },
      { id: 'older', label: 'Более старые', name: props.type },
    ]
  }

  let i = 0

  return (
    <S.RadioFilter top={props.top} left={props.left}>
      {data.map((item) => (
        <S.RadioFilterItem key={i++}>
          <S.RadioFilterItemInput
            type="radio"
            id={item.id}
            name={item.name}
            value={item.id}
            defaultChecked={item.id === 'newer' ? 'true' : ''}
          ></S.RadioFilterItemInput>
          <label htmlFor={item.id}>{item.label}</label>
        </S.RadioFilterItem>
      ))}
    </S.RadioFilter>
  )
}

export default RadioFilter
