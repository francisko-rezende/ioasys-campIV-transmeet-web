import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import TransRegistrationForm from '.'

export default {
  title: 'TransRegistrationForm',
  component: TransRegistrationForm,
} as ComponentMeta<typeof TransRegistrationForm>

const Template: ComponentStory<typeof TransRegistrationForm> = (args) => (
  <div style={{ maxWidth: '470px' }}>
    <TransRegistrationForm {...args} />
  </div>
)

// const Template: ComponentStory<typeof TransRegistrationForm> = () => <TransRegistrationForm />

export const Default = Template.bind({})
