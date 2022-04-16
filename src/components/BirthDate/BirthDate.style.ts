import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  position: relative;
  justify-content: center;
`

export const Label = styled.label`
  z-index: 2;
  position: absolute;
  /* left: 50%; */
  /* transform: translateX(-50%); */
  left: 11px;
  /* margin: 0 auto; */
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

export const Input = styled.input`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.typographyColors.gray};
  border-style: solid;
  border-radius: 4px;
  text-align: center;
  padding: 14px 0;
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
