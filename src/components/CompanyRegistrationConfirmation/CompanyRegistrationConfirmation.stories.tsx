import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import CompanyRegistrationConfirmation from '.'

export default {
  title: 'CompanyRegistrationConfirmation',
  component: CompanyRegistrationConfirmation,
} as ComponentMeta<typeof CompanyRegistrationConfirmation>

//const Template: ComponentStory<typeof CompanyRegistrationConfirmation> = (args) => <CompanyRegistrationConfirmation {...args} />

const Template: ComponentStory<typeof CompanyRegistrationConfirmation> = () => <CompanyRegistrationConfirmation />

export const Default = Template.bind({})
