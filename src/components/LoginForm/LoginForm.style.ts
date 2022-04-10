import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 470px;
`

export const LogoWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 62px;
`

export const Title = styled.h1`
  margin-bottom: 24px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.typographyColors.gray};
    `}
`

export const Subtitle = styled.h2`
  margin-bottom: 66px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.grayLight};
    font-size: ${theme.font.sizes['6']};
  `}
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  margin-bottom: 13px;
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.semiBold};
    color: ${theme.colors.secondaryColor.secondary};
    font-size: ${theme.font.sizes['2']};
    cursor: pointer;
    text-align: right;
    margin-bottom: 58px;
    width: 100%;
  `}
`

export const RegisterText = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.neutralColors.grayDark};
    font-size: ${theme.font.sizes['2']};
    cursor: pointer;
    margin-top: 64px;
  `}
`
