import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content minmax(auto, 297px);
  align-content: start;
  align-self: center;
`

export const Label = styled.label`
  margin-left: 10px;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes['1']};
    color: ${theme.colors.typographyColors.gray};
  `}
`
