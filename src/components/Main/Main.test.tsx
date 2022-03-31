import React from 'react'

import { render, screen } from '@testing-library/react'

import Main from '.'

test('that Main renders properly', () => {
  render(<Main />)

  expect(
    screen.getByRole('heading', { name: /cra project starter/i }),
  ).toBeInTheDocument()

  expect(
    screen.getByRole('heading', {
      name: /A CRA template that includes ESLINT\/Prettier, Styled Components and Storybook/i,
    }),
  ).toBeInTheDocument()

  expect(screen.getByRole('main')).toMatchSnapshot()
})

test('that Main renders colors properly', () => {
  render(<Main />)

  expect(screen.getByRole('main')).toHaveStyle({
    'background-color': '#06092b',
    color: '#fff',
  })
})
