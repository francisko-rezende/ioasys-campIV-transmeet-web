import React from 'react'

import { render, screen } from '@testing-library/react'

import TransGeneralInfo from '.'

test('that TransGeneralInfo renders properly', () => {
  render(<TransGeneralInfo />)

  expect(screen.getByRole('heading', { name: /TransGeneralInfo/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
