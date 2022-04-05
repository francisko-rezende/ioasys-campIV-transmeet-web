import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '.'
import useFormValidation from '../../hooks/useFormValidation'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

export const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)

Template.args = {
  label: 'Label',
  placeholder: 'Input value goes here 1234567890',
  error: 'This is an error',
}

// export const Email: ComponentStory<typeof Input> = Template.bind({})

// Email.args = {}

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

export const Telefone = () => {
  const phone = useFormValidation('phone')

  return (
    <Input
      label="Telefone"
      inputType="tel"
      name="phone"
      error={phone.error}
      onBlur={phone.onBlur}
      onChange={phone.onChange}
      value={phone.value}
      placeholder="(99) 9999-9999"
    />
  )
}

export const CPF = () => {
  const cpf = useFormValidation('cpf')

  return (
    <Input
      label="CPF"
      inputType="text"
      name="cpf"
      error={cpf.error}
      onBlur={cpf.onBlur}
      onChange={cpf.onChange}
      value={cpf.value}
      placeholder="999.999.999-99"
    />
  )
}
