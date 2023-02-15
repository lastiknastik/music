import * as S from './styles'

export default function LayoutColumn(props) {
  return (
    <S.LayoutColumn gap={props.gap} marginTop={props.marginTop}>
      {props.children}
    </S.LayoutColumn>
  )
}
