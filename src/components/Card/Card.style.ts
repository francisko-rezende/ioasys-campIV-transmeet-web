import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components'

// import havaianas from '../../assets/havaianas-logo.jpg'
import { cardProps } from './Card'

type VariantCallback = (theme: DefaultTheme) => FlattenSimpleInterpolation

type CardVariantsProps = {
  match: VariantCallback
  'no match': VariantCallback
  underway: VariantCallback
}

const cardVariants = {
  match: (theme: DefaultTheme) => css`
    &::before {
      background-color: ${theme.colors.statusColor.success};
    }
  `,
  'no match': (theme: DefaultTheme) => css`
    &::before {
      background-color: ${theme.colors.statusColor.error};
    }
  `,
  'not sent': (theme: DefaultTheme) => css`
    &::before {
      background-color: ${theme.colors.typographyColors.white};
    }
  `,
  underway: (theme: DefaultTheme) => css`
    &::before {
      background-color: ${theme.colors.statusColor.warning};
    }
  `,
}

export const Wrapper = styled.div<cardProps>`
  background-color: hsla(211, 44%, 15%, 1);
  width: 310px;
  height: 109px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &::before {
    display: block;
    content: '';
    width: 14px;
    height: 77px;
    background-color: red;
    border-radius: 10px;
    position: absolute;
    left: 18px;
  }

  ${({ theme, matchStatus }) => css`
    ${!!matchStatus &&
    cardVariants[matchStatus as keyof CardVariantsProps](theme)}
  `}
`

export const Name = styled.h3`
  margin-bottom: 3px;
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
  `}
`

export const DetailsText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor.secondaryLighter};
  `}
`

export const NameWrapper = styled.div`
  margin-left: 42px;
`

export const AvatarWrapper = styled.div`
  width: 66px;
  height: 66px;
  border: 5px solid ${({ theme }) => theme.colors.typographyColors.white};
  border-radius: 50%;
  margin-right: 20px;

  ${({ theme }) => css`
    background: ${theme.colors.typographyColors.white};
  `}
`

export const Img = styled.img`
  object-fit: cover;
  display: block;
  max-width: 100%;
  border-radius: 50%;
`
