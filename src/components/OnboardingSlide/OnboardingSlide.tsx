import React from 'react'

import * as S from './OnboardingSlide.style'

export type OnboardingSlideProps = {
  children: React.ReactNode
}

const OnboardingSlide = ({ children }: OnboardingSlideProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default OnboardingSlide
