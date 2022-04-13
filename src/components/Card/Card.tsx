import React from 'react'

import * as S from './Card.style'

export type cardProps = {
  matchStatus: 'match' | 'no match' | 'underway' | 'not sent'
  name?: string
}

const Card = ({ matchStatus = 'no match' }: cardProps) => {
  return <S.Wrapper matchStatus={matchStatus}></S.Wrapper>
}

export default Card
