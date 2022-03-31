import React from 'react'

import { render, screen } from '@testing-library/react'

import BirthDate from '.'

test('that BirthDate renders properly', () => {
  render(<BirthDate />)

  // expect(screen.getByRole('heading', { name: /BirthDate/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
