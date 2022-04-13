import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Onboarding from '.'

export default {
  title: 'Onboarding',
  component: Onboarding,
} as ComponentMeta<typeof Onboarding>

//const Template: ComponentStory<typeof Onboarding> = (args) => <Onboarding {...args} />

const Template: ComponentStory<typeof Onboarding> = () => <Onboarding />

export const Default = Template.bind({})
