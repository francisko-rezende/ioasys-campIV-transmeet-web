import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import FormPagenavigationBar from '.'

export default {
  title: 'Formulários/Componentes/FormPagenavigationBar',
  component: FormPagenavigationBar,
} as ComponentMeta<typeof FormPagenavigationBar>

const Template: ComponentStory<typeof FormPagenavigationBar> = (args) => (
  <FormPagenavigationBar {...args} />
)

// const Template: ComponentStory<typeof FormPagenavigationBar> = () => <FormPagenavigationBar />

export const Default = Template.bind({})
Default.args = {
  setCurrentPage: () => console.log('clicou'),
}

export const PáginaAtiva = Template.bind({})
PáginaAtiva.args = {
  currentPage: '1',
  activeOnPage: '1',
  setCurrentPage: () => console.log('clicou'),
}

export const PáginaInativa = Template.bind({})
PáginaInativa.args = {
  currentPage: '2',
  activeOnPage: '1',
  setCurrentPage: () => console.log('clicou'),
}
