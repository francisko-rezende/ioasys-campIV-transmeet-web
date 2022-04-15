import styled, { css } from 'styled-components'

export const Form = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 53px;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.extraBold};
    font-size: ${theme.font.sizes['10']};
  `}
`

export const GeneralInstructions = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.grayLight};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes['6']};
    text-align: center;
    margin-bottom: 72px;
  `}
`

export const SpecificInstructions = styled.p`
  text-align: center;
  margin-bottom: 35px;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes['4']};
    color: ${theme.colors.typographyColors.gray};
  `}
`

export const TextArea = styled.textarea`
  padding: 15px 23px;
  max-height: 173px;
  max-width: 470px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.typographyColors.gray};
  border-style: solid;
  border-radius: 4px;
  margin-bottom: calc(60px - 20px);
`
