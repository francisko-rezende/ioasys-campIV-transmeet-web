import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import RegistrationConfirmation from '.'

export default {
  title: 'Formulários/RegistrationConfirmation',
  component: RegistrationConfirmation,
} as ComponentMeta<typeof RegistrationConfirmation>

//const Template: ComponentStory<typeof RegistrationConfirmation> = (args) => <RegistrationConfirmation {...args} />

const Template: ComponentStory<typeof RegistrationConfirmation> = () => (
  <div style={{ maxWidth: '470px' }}>
    <RegistrationConfirmation
      specificInstructions="ola marilene"
      textAreaPlaceholder="hoje a noite"
    />
  </div>
)

export const Default = Template.bind({})
