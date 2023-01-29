import './RadioFilter.css'

function RadioFilter(props) {
  //stub
  let data = []

  if (props.type === 'year') {
    data = [
      { id: 'newer', label: 'Более новые', name: props.type },
      { id: 'older', label: 'Более старые', name: props.type },
    ]
  }

  const elementPosition = { top: props.top, left: props.left }

  let i = 0

  return (
    <div className="filter__button-radio" style={elementPosition}>
      {data.map((item) => (
        <div className="filter__button-radio-item" key={i++}>
          <input
            type="radio"
            id={item.id}
            name={item.name}
            value={item.id}
            defaultChecked={item.id === 'newer' ? 'true' : ''}
          ></input>
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}
    </div>
  )
}

export default RadioFilter
