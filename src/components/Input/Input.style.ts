import styled, { css } from 'styled-components'

import { theme } from './../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
`

export const Label = styled.label`
  z-index: 2;
  position: relative;
  left: 27px;
  top: -6px;
  padding: 0 5px;
  width: fit-content;

  ${({ theme }) => css`
    background-color: ${theme.colors.typographyColors.white};
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.sizes['2']};
  `}
`

export const Input = styled.input`
  position: absolute;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.typographyColors.gray};
  border-style: solid;
  border-radius: 4px;
  padding: 14px 16px;
  height: 56px;
  width: 470px;
  margin-left: 15px;
  max-width: 100%;
  line-height: 1.4;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes['4']};
    color: ${theme.colors.typographyColors.gray};
  `}
`

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.statusColor.error};
  position: relative;
  top: 3rem;
  left: 29px;
  max-width: 100%;
`
