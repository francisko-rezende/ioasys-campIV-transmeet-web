import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import Onboarding from '.'
import OnboardingSlide from '../OnboardingSlide'

export default {
  title: 'Onboarding',
  component: Onboarding,
} as ComponentMeta<typeof Onboarding>

//const Template: ComponentStory<typeof Onboarding> = (args) => <Onboarding {...args} />

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const Horizontal: ComponentStory<typeof Onboarding> = () => (
  <Onboarding settings={settings}>
    <OnboardingSlide>
      <h1>Acesse sua conta</h1>
      <p>Faça seu login e aproveite as oportunidades que estão a sua espera!</p>
    </OnboardingSlide>
    <OnboardingSlide>
      <h1>Acesse sua conta</h1>
      <p>Faça seu login e aproveite as oportunidades que estão a sua espera!</p>
    </OnboardingSlide>
    <OnboardingSlide>
      <h1>Acesse sua conta</h1>
      <p>Faça seu login e aproveite as oportunidades que estão a sua espera!</p>
    </OnboardingSlide>
    <OnboardingSlide>
      <h1>Acesse sua conta</h1>
      <p>Faça seu login e aproveite as oportunidades que estão a sua espera!</p>
    </OnboardingSlide>
    {/* <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide> */}
  </Onboarding>
)

const Slide = styled.div`
  background: gray;
  width: 300px;
  padding: 100px 0;
  border: 1px solid red;
  color: white;
  text-align: center;
`

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 3,
}

export const Vertical: ComponentStory<typeof Onboarding> = () => (
  <Onboarding settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
  </Onboarding>
)
