import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import RegistrationForm from '.'

export default {
  title: 'RegistrationForm',
  component: RegistrationForm,
} as ComponentMeta<typeof RegistrationForm>

//const Template: ComponentStory<typeof RegistrationForm> = (args) => <RegistrationForm {...args} />

const Template: ComponentStory<typeof RegistrationForm> = () => (
  <RegistrationForm />
)

export const Default = Template.bind({})
