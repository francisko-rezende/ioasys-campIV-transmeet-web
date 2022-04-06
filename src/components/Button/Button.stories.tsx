import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '.'
import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Label',
}

export const Continuar = Template.bind({})
Continuar.args = {
  children: 'Continuar',
  icon: <Chevron />,
  length: 'long',
  color: 'secondary',
  isActive: true,
}

export const TransAtivo = Template.bind({})
TransAtivo.args = {
  children: 'Trans',
  length: 'short',
  color: 'primary',
  isActive: true,
}

export const TransInativo = Template.bind({})
TransInativo.args = {
  children: 'Trans',
  length: 'short',
  color: 'primary',
  isActive: false,
}

export const NãoTransAtivo = Template.bind({})
NãoTransAtivo.args = {
  children: 'Não Trans',
  length: 'short',
  color: 'primary',
  isActive: true,
}

export const NãoTransInativo = Template.bind({})
NãoTransInativo.args = {
  children: 'Não Trans',
  length: 'short',
  color: 'primary',
  isActive: false,
}

export const EmpresaAtivo = Template.bind({})
EmpresaAtivo.args = {
  children: 'Empresa',
  length: 'short',
  color: 'primary',
  isActive: true,
}

export const EmpresaInativo = Template.bind({})
EmpresaInativo.args = {
  children: 'Empresa',
  length: 'short',
  color: 'primary',
  isActive: false,
}
