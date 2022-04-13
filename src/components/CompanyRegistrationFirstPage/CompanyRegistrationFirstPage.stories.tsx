import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import CompanyRegistrationFirstPage from '.'

export default {
  title: 'Formulários/CompanyRegistrationFirstPage',
  component: CompanyRegistrationFirstPage,
} as ComponentMeta<typeof CompanyRegistrationFirstPage>

//const Template: ComponentStory<typeof CompanyRegistrationFirstPage> = (args) => <CompanyRegistrationFirstPage {...args} />

const Template: ComponentStory<typeof CompanyRegistrationFirstPage> = () => (
  <div style={{ maxWidth: '470px' }}>
    <CompanyRegistrationFirstPage />
  </div>
)

export const Default = Template.bind({})
