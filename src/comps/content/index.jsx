import iconSprite from '../../img/icon/sprite.svg'
import Playlist from '../playlist'
import * as S from './styles'

function Content(props) {
  return (
    <S.TracksList>
      <S.TracksListTitle>
        <S.TracksListTitleCol colNum="col01">Трек</S.TracksListTitleCol>
        <S.TracksListTitleCol colNum="col02">ИСПОЛНИТЕЛЬ</S.TracksListTitleCol>
        <S.TracksListTitleCol colNum="col03">АЛЬБОМ</S.TracksListTitleCol>
        <S.TracksListTitleCol colNum="col04">
          <S.TracksListTimeIcon alt="time">
            <use xlinkHref={iconSprite + '#icon-watch'}></use>
          </S.TracksListTimeIcon>
        </S.TracksListTitleCol>
      </S.TracksListTitle>
      <Playlist
        isSkeletonVisible={props.isSkeletonVisible}
        tracksList={props.tracksList}
      />
    </S.TracksList>
  )
}

export default Content
