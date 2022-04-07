import React from 'react'

import * as S from './SelectInput.style'

export type SelectProps = {
  name?: string
  options?: string[]
}

const SelectInput = ({ name, options }: SelectProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{name}</S.Label>
      <S.Select name={name} id={name}>
        <option disabled selected>
          Selecionar
        </option>
        {!!options &&
          options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </S.Select>
    </S.Wrapper>
  )
}

export default SelectInput
