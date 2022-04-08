import styled, { css, DefaultTheme } from 'styled-components'

type StyledBarVariantsProps = {
  isActive: boolean
  onClick: () => void
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
  max-width: 232px;
  width: 100%;
  height: 9px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  ${({ theme, isActive }) => css`
    ${isActive ? barVariants.active(theme) : barVariants.inactive(theme)};
  `}
`
