import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import TransGeneralInfo from '.'

export default {
  title: 'TransGeneralInfo',
  component: TransGeneralInfo,
} as ComponentMeta<typeof TransGeneralInfo>

//const Template: ComponentStory<typeof TransGeneralInfo> = (args) => <TransGeneralInfo {...args} />

const Template: ComponentStory<typeof TransGeneralInfo> = () => (
  <TransGeneralInfo />
)

export const Default = Template.bind({})
