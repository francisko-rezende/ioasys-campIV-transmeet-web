import React from 'react'

import { render, screen } from '@testing-library/react'

import LoginPage from '.'

test('that LoginPage renders properly', () => {
  render(<LoginPage />)

  expect(screen.getByRole('heading', { name: /LoginPage/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
