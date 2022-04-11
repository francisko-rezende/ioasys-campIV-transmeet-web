import React from 'react'

import { render, screen } from '@testing-library/react'

import TransRegistrationFirstPage from '.'

test('that TransGeneralInfo renders properly', () => {
  render(<TransRegistrationFirstPage />)

  expect(
    screen.getByRole('heading', { name: /TransRegistrationFirstPage/i }),
  ).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
