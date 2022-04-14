import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import OnboardingSlide from '.'

export default {
  title: 'OnboardingSlide',
  component: OnboardingSlide,
} as ComponentMeta<typeof OnboardingSlide>

//const Template: ComponentStory<typeof OnboardingSlide> = (args) => <OnboardingSlide {...args} />

const Template: ComponentStory<typeof OnboardingSlide> = () => (
  <OnboardingSlide>ola marilene</OnboardingSlide>
)

export const Default = Template.bind({})
