import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import SearchSection from '.'

export default {
  title: 'Home/SearchSection',
  component: SearchSection,
} as ComponentMeta<typeof SearchSection>

//const Template: ComponentStory<typeof SearchSection> = (args) => <SearchSection {...args} />

const Template: ComponentStory<typeof SearchSection> = () => <SearchSection />

export const Default = Template.bind({})

Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  backgrounds: {
    default: 'dark',
  },
}
