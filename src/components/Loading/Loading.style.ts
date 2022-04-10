import styled, { css, keyframes } from 'styled-components'

import { LoadingProps } from './Loading'

const spinnerVariants = {
  spinning: () => css`
    animation: ${spin} 1s linear infinite;
  `,
}

const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

export const Image = styled.img<LoadingProps>`
  ${({ isLoading }) => css`
    ${isLoading && spinnerVariants['spinning']}
  `}
`
