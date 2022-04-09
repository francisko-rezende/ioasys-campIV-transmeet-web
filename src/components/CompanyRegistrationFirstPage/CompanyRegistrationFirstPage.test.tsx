import React from 'react'

import { render, screen } from '@testing-library/react'

import CompanyRegistrationFirstPage from '.'

test('that CompanyRegistrationFirstPage renders properly', () => {
  render(<CompanyRegistrationFirstPage />)

  expect(screen.getByRole('heading', { name: /CompanyRegistrationFirstPage/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
