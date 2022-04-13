import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import LoginPage from '.'

export default {
  title: 'Páginas/LoginPage',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>

//const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />

export const Default = Template.bind({})
