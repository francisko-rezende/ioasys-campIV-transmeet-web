import styled, { css } from 'styled-components'

export const Container = styled.section`
  max-width: 470px;
  margin-top: 70px;
  margin-bottom: 55px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
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

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.grayLight};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes['6']};
    text-align: center;
    margin-bottom: 20px;
  `}
`

export const TagContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 38px;
`
export const Form = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 53px;
  /* display: grid;
  grid-template-rows: repeat(3, 56px);
  gap: 20px; */
`
export const PhoneLineWrapper = styled.div`
  display: grid;
  grid-template-columns: auto minmax(auto, 307px);
  gap: 28px;
`

export const LocationLineWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 272px) minmax(auto, 170px);
  gap: 28px;
`

export const GenderLineWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
`
