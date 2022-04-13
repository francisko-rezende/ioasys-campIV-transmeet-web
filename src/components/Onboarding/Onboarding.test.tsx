import React from 'react'

import { render, screen } from '@testing-library/react'

import Onboarding from '.'

test('that Onboarding renders properly', () => {
  render(<Onboarding />)

  expect(screen.getByRole('heading', { name: /Onboarding/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
