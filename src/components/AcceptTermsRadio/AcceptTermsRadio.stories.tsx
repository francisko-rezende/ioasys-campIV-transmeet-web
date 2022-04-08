import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import AcceptTermsRadio from '.'

export default {
  title: 'AcceptTermsRadio',
  component: AcceptTermsRadio,
} as ComponentMeta<typeof AcceptTermsRadio>

const Template: ComponentStory<typeof AcceptTermsRadio> = (args) => (
  <AcceptTermsRadio {...args} />
)

export const Default = Template.bind({})
