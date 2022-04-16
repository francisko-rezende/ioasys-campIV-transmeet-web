import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Header from '.'

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

// const Template: ComponentStory<typeof Header> = () => <Header />

export const Default = Template.bind({})

Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  backgrounds: {
    default: 'dark',
  },
}
