import React from 'react'

import * as S from './Button.style'

export type ButtonProps = {
  length?: 'short' | 'long'
  color?: 'primary' | 'secondary'
  children?: React.ReactNode
  icon?: JSX.Element
  isActive?: boolean
}

const Button = ({
  length = 'short',
  color = 'primary',
  children,
  icon,
  isActive = true,
}: ButtonProps) => {
  return (
    <S.Button
      length={length}
      color={color}
      hasIcon={!!icon}
      isActive={isActive}
    >
      {!!children && <span>{children}</span>}
      {!!icon && icon}
    </S.Button>
  )
}

export default Button
