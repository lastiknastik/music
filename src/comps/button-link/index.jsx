import * as S from './styles'

export default function ButtonLink(props) {
  return (
    <S.ButtonLink
      marginTop={props.marginTop}
      isMain={props.isMain}
      to={props.to}
    >
      {props.children}
    </S.ButtonLink>
  )
}
