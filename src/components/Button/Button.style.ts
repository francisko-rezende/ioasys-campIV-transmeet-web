import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from './Button'

type StyledButtonProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'color' | 'length' | 'isActive'>

const buttonVariants = {
  short: () => css`
    padding: 6px;
    width: 143px;
  `,

  long: () => css`
    padding: 6px;
    width: 270px;
  `,

  full: () => css`
    padding: 6px;
    width: 100%;
  `,

  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primaryColor.primary};
  `,

  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondaryColor.secondary};
  `,
  withChevron: () => css`
    svg {
      width: 16px;
      margin-left: 8px;
    }

    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
  notChosen: (theme: DefaultTheme) => css`
    background: ${theme.colors.neutralColors.gray};
    color: ${theme.colors.neutralColors.grayDark};
  `,
}

export const Button = styled.button<StyledButtonProps>`
  border: none;
  cursor: pointer;
  height: 40px;
  transition: color 300ms;

  ${({ length, theme, color, hasIcon, isActive }) => css`
    background-color: ${theme.colors.primaryColor.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};

    ${!!length && buttonVariants[length!]}
    ${hasIcon && buttonVariants.withChevron}
    ${!!color && buttonVariants[color!](theme)}
    ${!isActive && buttonVariants.notChosen(theme)}
  `};
`
