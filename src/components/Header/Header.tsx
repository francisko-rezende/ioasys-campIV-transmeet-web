import React from 'react'

import { ReactComponent as HamburguerIcon } from '../../assets/icons/hamburguer-icon.svg'
import * as S from './Header.style'

export type HeaderProps = {
  name?: string
}

const Header = ({ name = 'Paloma' }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.NameWrapper>
        <S.WelcomeText>Boas vindas</S.WelcomeText>
        <S.Name>{name}!</S.Name>
      </S.NameWrapper>
      <HamburguerIcon />
    </S.Wrapper>
  )
}

export default Header
