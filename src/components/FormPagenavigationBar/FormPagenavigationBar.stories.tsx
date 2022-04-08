import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import FormPagenavigationBar from '.'

export default {
  title: 'FormPagenavigationBar',
  component: FormPagenavigationBar,
} as ComponentMeta<typeof FormPagenavigationBar>

const Template: ComponentStory<typeof FormPagenavigationBar> = (args) => (
  <FormPagenavigationBar {...args} />
)

// const Template: ComponentStory<typeof FormPagenavigationBar> = () => <FormPagenavigationBar />

export const Default = Template.bind({})

export const PáginaAtiva = Template.bind({})
PáginaAtiva.args = {
  currentPage: 1,
  activeOnPage: 1,
}

export const PáginaInativa = Template.bind({})
PáginaInativa.args = {
  currentPage: 0,
  activeOnPage: 1,
}
