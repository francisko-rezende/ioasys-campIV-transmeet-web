import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Loading from '.'

export default {
  title: 'Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />

// const Template: ComponentStory<typeof Loading> = () => <Loading />

export const Default = Template.bind({})
Default.args = {
  isLoading: true,
}
