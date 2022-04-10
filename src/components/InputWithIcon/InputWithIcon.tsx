import React from 'react'

import * as S from './InputWithIcon.style'

export type InputWithIconProps = {
  label?: string
  icon?: React.ReactNode
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputWithIcon = ({
  label = 'label',
  icon,
  type = 'text',
  value,
  onChange,
}: InputWithIconProps) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      {!!icon && <S.MailIconWrapper>{icon}</S.MailIconWrapper>}
      <S.Input type={type} value={value} onChange={onChange} />
    </S.Wrapper>
  )
}

export default InputWithIcon
