import React from 'react'

import * as S from './InputWithIcon.style'

export type InputWithIconProps = {
  label?: string
  icon?: React.ReactNode
  type?: string
  value?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean | undefined
  error?: string
  setError?: React.Dispatch<React.SetStateAction<string>>
}

const InputWithIcon = ({
  label = 'label',
  icon,
  type = 'text',
  value,
  onChange,
  name,
  error,
  setError,
  ...props
}: InputWithIconProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Label htmlFor={name}>{label}</S.Label>
        {!!icon && <S.IconWrapper>{icon}</S.IconWrapper>}
        <S.Input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onChange}
          name={name}
          id={name}
          {...props}
        />
      </S.Wrapper>
      {error && <p>As senhas não são idênticas</p>}
    </>
  )
}

export default InputWithIcon
