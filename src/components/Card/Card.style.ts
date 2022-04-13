import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components'

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

  &::before {
    display: block;
    content: '';
    width: 14px;
    height: 77px;
    background-color: red;
    border-radius: 10px;
    position: relative;
    top: 16px;
    left: 18px;
  }

  ${({ theme, matchStatus }) => css`
    ${!!matchStatus &&
    cardVariants[matchStatus as keyof CardVariantsProps](theme)}
  `}
`
