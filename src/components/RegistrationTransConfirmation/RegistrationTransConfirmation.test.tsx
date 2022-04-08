import React from 'react'

import { render, screen } from '@testing-library/react'

import RegistrationTransConfirmation from '.'

test('that RegistrationTransConfirmation renders properly', () => {
  render(<RegistrationTransConfirmation />)

  // expect(screen.getByRole('heading', { name: /RegistrationTransConfirmation/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
