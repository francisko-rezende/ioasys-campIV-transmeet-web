import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '.'
import useFormValidation from '../../hooks/useFormValidation'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

// const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

// const Template: ComponentStory<typeof Input> = () => <Input />

export const Password = () => {
  const password = useFormValidation('password')

  return (
    <Input
      label="Senha"
      inputType="password"
      name="password"
      error={password.error}
      onBlur={password.onBlur}
      onChange={password.onChange}
      value={password.value}
    />
  )
}

export const Email = () => {
  const email = useFormValidation('email')

  return (
    <Input
      label="Email"
      inputType="email"
      name="email"
      error={email.error}
      onBlur={email.onBlur}
      onChange={email.onChange}
      value={email.value}
      placeholder="biruleibe@gmail.com"
    />
  )
}
