import React from 'react'

import { render, screen } from '@testing-library/react'

import TransRegistrationForm from '.'

test('that TransRegistrationForm renders properly', () => {
  render(<TransRegistrationForm />)

  expect(screen.getByRole('heading', { name: /TransRegistrationForm/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
