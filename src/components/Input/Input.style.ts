import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  /* margin-bottom: 100px; */
  /* width: 100%; */
  /* background-color: blue; */
`

export const Label = styled.label`
  z-index: 2;
  position: relative;
  left: 27px;
  top: 10px;
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
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.typographyColors.gray};
  border-style: solid;
  border-radius: 4px;
  padding: 14px 16px;
  height: 56px;
  width: 100%;
  /* width: 470px; */
  /* margin-left: 15px; */
  max-width: 470px;
  line-height: 1.4;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes['4']};
    color: ${theme.colors.typographyColors.gray};
  `}
`

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.statusColor.error};
  position: relative;
  top: 0.5rem;
  left: 29px;
  max-width: 100%;
`
