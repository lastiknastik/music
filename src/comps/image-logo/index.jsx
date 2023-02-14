import logo from '../../img/logo_black.svg'
import * as S from './styles'

export default function ImageLogo(props) {
  return (
    <S.ImageLogo
      src={props.src || logo}
      alt={props.alt | 'logo'}
      width={props.width}
      height={props.height}
    />
  )
}
