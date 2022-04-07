import React from 'react'

import * as S from './Input.style'

export type InputProps = {
  label: string
  inputType: string
  name: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: () => boolean
  error: string | null
  placeholder?: string
  inputWidth?: string
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
  inputWidth = '470px',
}: InputProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Label htmlFor={name}>{label}</S.Label>
        <S.Input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          inputWidth={inputWidth}
        />
      </S.Wrapper>
      {error && <S.Error>{error}</S.Error>}
    </>
  )
}

export default Input
