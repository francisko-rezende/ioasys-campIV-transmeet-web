import React from 'react'

import * as S from './BirthDate.style'

const BirthDate = () => {
  return (
    <S.Wrapper>
      <label htmlFor="birthDate">Data de nascimento:</label>
      <input type="date" name="birthDate" min="2014-03-31" max="2022-03-31" />
    </S.Wrapper>
  )
}

export default BirthDate
