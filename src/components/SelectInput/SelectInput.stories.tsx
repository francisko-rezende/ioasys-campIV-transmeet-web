import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import SelectInput from '.'

export default {
  title: 'SelectInput',
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>

const StoryTemplate: ComponentStory<typeof SelectInput> = (...args) => (
  <SelectInput {...args} name="Template" options={['first', 'second']} />
)

export const Template = StoryTemplate.bind({})
