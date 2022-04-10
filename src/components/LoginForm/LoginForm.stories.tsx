import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import LoginForm from '.'

export default {
  title: 'LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

//const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

const Template: ComponentStory<typeof LoginForm> = () => (
  // <div
  //   style={{
  //     maxWidth: '470px',
  //     display: 'grid',
  //     gridTemplateColumns: '1fr',
  //     justifyContent: 'center',
  //   }}
  // >
  <LoginForm />
  // </div>
)

export const Default = Template.bind({})
