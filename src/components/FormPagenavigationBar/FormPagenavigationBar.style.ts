import styled, { css, DefaultTheme } from 'styled-components'

type StyledBarVariantsProps = {
  isActive: boolean
}

const barVariants = {
  active: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primaryColor.primary};
  `,
  inactive: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutralColors.gray};
  `,
}

export const Button = styled.button<StyledBarVariantsProps>`
  width: 263px;
  height: 9px;
  border: none;
  border-radius: 10px;

  ${({ theme, isActive }) => css`
    ${isActive ? barVariants.active(theme) : barVariants.inactive(theme)};
  `}
`
