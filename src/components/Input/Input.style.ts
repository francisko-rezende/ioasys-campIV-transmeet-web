import styled, { css } from 'styled-components'

import { InputProps } from './Input'

type StyledInputProps = Pick<InputProps, 'inputWidth'>

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  position: relative;
`

export const Label = styled.label`
  z-index: 2;
  position: absolute;
  left: 11px;
  top: -4px;
  padding: 0 5px;
  width: fit-content;

  ${({ theme }) => css`
    background-color: ${theme.colors.typographyColors.white};
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.sizes['2']};
  `}
`

export const Input = styled.input<StyledInputProps>`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.typographyColors.gray};
  border-style: solid;
  border-radius: 4px;
  padding: 14px 16px;
  height: 56px;
  width: 100%;
  /* width: 470px; */
  /* margin-left: 15px; */
  /* max-width: 470px; */
  line-height: 1.4;

  ${({ theme, inputWidth }) => css`
    font-size: ${theme.font.sizes['4']};
    color: ${theme.colors.typographyColors.gray};
    max-width: ${inputWidth};
  `}
`

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.statusColor.error};
  font-size: ${({ theme }) => theme.font.sizes['3']};
  position: relative;
  max-width: 100%;
`
