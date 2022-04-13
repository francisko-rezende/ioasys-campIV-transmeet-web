import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import CompanyRegistrationForm from '.'

export default {
  title: 'Formulários/CompanyRegistrationForm',
  component: CompanyRegistrationForm,
} as ComponentMeta<typeof CompanyRegistrationForm>

const Template: ComponentStory<typeof CompanyRegistrationForm> = (args) => (
  <div style={{ maxWidth: '470px' }}>
    <CompanyRegistrationForm {...args} />
  </div>
)

export const Default = Template.bind({})
