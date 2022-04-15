import React from 'react'

import { render, screen } from '@testing-library/react'

import CompanyRegistrationConfirmation from '.'

test('that CompanyRegistrationConfirmation renders properly', () => {
  render(<CompanyRegistrationConfirmation />)

  expect(screen.getByRole('heading', { name: /CompanyRegistrationConfirmation/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
