import React from 'react'

import * as S from './styles'

const Main = ({
  title = 'CRA Project Starter',
  description = 'A CRA template that includes ESLINT/Prettier, Styled Components and Storybook',
}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Main
