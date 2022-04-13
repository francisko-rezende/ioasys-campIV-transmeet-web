import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import AcceptTermsCheckbox from '.'

export default {
  title: 'Inputs/AcceptTermsCheckbox',
  component: AcceptTermsCheckbox,
} as ComponentMeta<typeof AcceptTermsCheckbox>

const Template: ComponentStory<typeof AcceptTermsCheckbox> = (args) => (
  <AcceptTermsCheckbox {...args} />
)

export const Default = Template.bind({})
