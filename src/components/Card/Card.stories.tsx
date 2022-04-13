import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Card from '.'

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

// const Template: ComponentStory<typeof Card> = () => <Card />

export const Default = Template.bind({})
