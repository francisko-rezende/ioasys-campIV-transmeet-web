import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import TransRegistrationFirstPage from '.'

export default {
  title: 'TransRegistrationFirstPage',
  component: TransRegistrationFirstPage,
} as ComponentMeta<typeof TransRegistrationFirstPage>

//const Template: ComponentStory<typeof TransRegistrationFirstPage> = (args) => <TransRegistrationFirstPage {...args} />

const Template: ComponentStory<typeof TransRegistrationFirstPage> = () => (
  <div style={{ maxWidth: '470px' }}>
    <TransRegistrationFirstPage />
  </div>
)

export const Default = Template.bind({})
