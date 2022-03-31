import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import BirthDate from '.'

export default {
  title: 'BirthDate',
  component: BirthDate,
} as ComponentMeta<typeof BirthDate>

//const Template: ComponentStory<typeof BirthDate> = (args) => <BirthDate {...args} />

const Template: ComponentStory<typeof BirthDate> = () => <BirthDate />

export const Default = Template.bind({})
