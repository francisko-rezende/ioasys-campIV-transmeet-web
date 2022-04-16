import styled, { css } from 'styled-components'

export const Wrapper = styled.section``

export const Instructions = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.sizes['3']};
    display: block;
    margin-bottom: 16px;
  `}
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  height: 56px;
  padding: 0 12px;
  ${({ theme }) => css`
    background-color: ${theme.colors.typographyColors.white};
  `}
`

export const Input = styled.input`
  border: none;
`

export const IconWrapper = styled.span`
  align-self: center;
`
