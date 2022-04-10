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
}

const InputWithIcon = ({
  label = 'label',
  icon,
  type = 'text',
  value,
  onChange,
  name,
  ...props
}: InputWithIconProps) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      {!!icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <S.Input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        {...props}
      />
    </S.Wrapper>
  )
}

export default InputWithIcon
