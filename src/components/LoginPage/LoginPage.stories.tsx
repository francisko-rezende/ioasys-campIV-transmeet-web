import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import LoginPage from '.'
import LoginForm from '../LoginForm'
import RegistrationForm from '../RegistrationForm'

export default {
  title: 'Páginas/Com formulários',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>

//const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />

const Template: ComponentStory<typeof LoginPage> = (args) => (
  <LoginPage {...args} />
)

export const Login = Template.bind({})
Login.args = {
  form: <LoginForm />,
}

export const Registration = Template.bind({})
Registration.args = {
  form: <RegistrationForm />,
}
