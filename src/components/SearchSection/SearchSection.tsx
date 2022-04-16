import React from 'react'

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import * as S from './SearchSection.style'

const SearchSection = () => {
  return (
    <S.Wrapper>
      <S.Instructions>Faça sua busca por uma parceria</S.Instructions>
      <S.Form>
        <S.IconWrapper>
          <SearchIcon />
        </S.IconWrapper>
        <S.Input type="text" placeholder="Pesquise um termo ou empresa..." />
      </S.Form>
    </S.Wrapper>
  )
}

export default SearchSection
