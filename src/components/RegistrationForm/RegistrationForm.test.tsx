import React from 'react'

import { render, screen } from '@testing-library/react'

import RegistrationForm from '.'

test('that RegistrationForm renders properly', () => {
  render(<RegistrationForm />)

  // expect(screen.getByRole('heading', { name: /RegistrationForm/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
