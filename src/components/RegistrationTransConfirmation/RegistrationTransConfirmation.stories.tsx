import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import RegistrationTransConfirmation from '.'

export default {
  title: 'RegistrationTransConfirmation',
  component: RegistrationTransConfirmation,
} as ComponentMeta<typeof RegistrationTransConfirmation>

//const Template: ComponentStory<typeof RegistrationTransConfirmation> = (args) => <RegistrationTransConfirmation {...args} />

const Template: ComponentStory<typeof RegistrationTransConfirmation> = () => (
  <div style={{ maxWidth: '470px' }}>
    <RegistrationTransConfirmation
      specificInstructions="ola marilene"
      textAreaPlaceholder="hoje a noite"
    />
  </div>
)

export const Default = Template.bind({})
