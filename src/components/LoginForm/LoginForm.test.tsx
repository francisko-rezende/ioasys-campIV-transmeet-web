import React from 'react'

import { render, screen } from '@testing-library/react'

import LoginForm from '.'

test('that LoginForm renders properly', () => {
  render(<LoginForm />)

  expect(screen.getByRole('heading', { name: /LoginForm/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
