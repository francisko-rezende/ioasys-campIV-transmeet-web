import React from 'react'

import havaianas from '../../assets/havaianas-logo.jpg'
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import * as S from './Card.style'

export type cardProps = {
  matchStatus: 'match' | 'no match' | 'underway' | 'not sent'
  name?: string
  imgPath?: string
}

const Card = ({
  matchStatus = 'not sent',
  name = 'Havaianas',
  imgPath = havaianas,
}: cardProps) => {
  return (
    <S.Wrapper matchStatus={matchStatus}>
      <S.NameWrapper>
        <S.Name>{name}</S.Name>
        <S.DetailsText>
          <PlusIcon />
          Detalhes
        </S.DetailsText>
      </S.NameWrapper>
      <S.AvatarWrapper>
        <S.Img src={imgPath} />
      </S.AvatarWrapper>
    </S.Wrapper>
  )
}

export default Card
