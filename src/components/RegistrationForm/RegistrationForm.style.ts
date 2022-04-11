import styled, { css } from 'styled-components'

export const Container = styled.section`
  max-width: 470px;
  height: 896px;
  /* background-color: red; */
  margin-top: 70px;
  margin-bottom: 55px;
  /* display: flex;
  flex-direction: column; */
  display: grid;
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
  justify-content: space-around;
`

export const FormNavigationBarWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(2, 1fr);
  align-self: end;
  /* display: flex; */
`
