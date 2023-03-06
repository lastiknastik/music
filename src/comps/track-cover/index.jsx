import React from 'react'
import * as S from './styles'
import iconSprite from '../../img/icon/sprite.svg'

export default function TrackCover(props) {
  if (props.isSkeletonVisible) return <S.TrackTitleImgSkeleton />

  return (
    <S.TrackTitleImg>
      <S.TrackTitleSvg alt="music">
        <use xlinkHref={iconSprite + '#icon-note'}></use>
      </S.TrackTitleSvg>
    </S.TrackTitleImg>
  )
}
