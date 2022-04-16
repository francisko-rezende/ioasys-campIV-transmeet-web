import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const WelcomeText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    font-size: ${theme.font.sizes['7']};
  `}
`

export const Name = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes['11']};
  `}
`
