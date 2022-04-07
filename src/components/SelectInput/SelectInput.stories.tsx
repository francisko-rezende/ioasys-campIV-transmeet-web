import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import SelectInput from '.'
import { areaCodes } from './areaCodes'
import { states } from './states'

export default {
  title: 'SelectInput',
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>

const StoryTemplate: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args} />
)

export const Template = StoryTemplate.bind({})
Template.args = {
  name: 'Label',
  options: ['first', 'second', 'third'],
}

export const DDD = StoryTemplate.bind({})

DDD.args = {
  name: 'DDD',
  options: areaCodes,
}

export const Estado = StoryTemplate.bind({})

Estado.args = {
  name: 'Estado',
  options: states,
}
