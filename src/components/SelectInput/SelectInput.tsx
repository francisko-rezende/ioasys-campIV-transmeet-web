import React from 'react'

import * as S from './SelectInput.style'

export type SelectProps = {
  name?: string
  options?: string[]
  selectWidth?: string
  // onChange: React.Dispatch<React.SetStateAction<string>>
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void

  value: string
}

const SelectInput = ({
  name,
  options,
  selectWidth,
  value,
  onChange,
}: SelectProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{name}</S.Label>
      <S.Select
        name={name}
        id={name}
        selectWidth={selectWidth}
        value={value}
        onChange={onChange}
      >
        <option disabled>Selecionar</option>
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
