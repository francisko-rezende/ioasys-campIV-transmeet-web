import React from 'react'

import Slider, { Settings } from 'react-slick'

import * as S from './Onboarding.style'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Onboarding = ({ children, settings }: SliderProps) => {
  return (
    <S.Wrapper>
      <Slider {...settings}>{children}</Slider>
    </S.Wrapper>
  )
}

export default Onboarding
