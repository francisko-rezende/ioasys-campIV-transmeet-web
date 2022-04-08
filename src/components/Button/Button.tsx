import React from 'react'

import * as S from './Button.style'

export type ButtonProps = {
  length?: 'short' | 'long' | 'full'
  color?: 'primary' | 'secondary'
  children?: React.ReactNode
  icon?: React.ReactNode
  isActive?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> & {
      target: HTMLButtonElement
    },
  ) => void
}

const Button = ({
  length = 'short',
  color = 'primary',
  children,
  icon,
  isActive = true,
  onClick,
}: ButtonProps) => {
  return (
    <S.Button
      length={length}
      color={color}
      hasIcon={!!icon}
      isActive={isActive}
      onClick={onClick}
    >
      {!!children && <span>{children}</span>}
      {!!icon && icon}
    </S.Button>
  )
}

export default Button
