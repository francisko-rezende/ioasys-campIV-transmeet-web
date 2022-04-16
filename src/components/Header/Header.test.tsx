import React from 'react'

import { render, screen } from '@testing-library/react'

import Header from '.'

test('that Header renders properly', () => {
  render(<Header />)

  expect(screen.getByRole('heading', { name: /Header/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
