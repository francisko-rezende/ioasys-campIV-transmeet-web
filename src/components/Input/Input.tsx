import React from 'react'

import * as S from './Input.style'

interface Props {
  label: string
  inputType: string
  name: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: () => boolean
  error: string | null
  placeholder?: string
}

const Input = ({
  label,
  inputType,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}: Props) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Input
