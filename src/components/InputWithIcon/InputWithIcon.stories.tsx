import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import InputWithIcon from '.'
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg'

export default {
  title: 'InputWithIcon',
  component: InputWithIcon,
} as ComponentMeta<typeof InputWithIcon>

const Template: ComponentStory<typeof InputWithIcon> = (args) => (
  <InputWithIcon {...args} />
)

// const Template: ComponentStory<typeof InputWithIcon> = () => <InputWithIcon />

export const Default = Template.bind({})

export const Email = Template.bind({})

Email.args = {
  label: 'E-mail',
  icon: <MailIcon />,
  type: 'text',
}

export const Senha = Template.bind({})

Senha.args = {
  label: 'Senha',
  icon: <LockIcon />,
  type: 'password',
}
