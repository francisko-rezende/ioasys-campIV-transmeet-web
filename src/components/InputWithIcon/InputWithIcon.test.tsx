import React from 'react'

import { render, screen } from '@testing-library/react'

import InputWithIcon from '.'

test('that InputWithIcon renders properly', () => {
  render(<InputWithIcon />)

  expect(screen.getByRole('heading', { name: /InputWithIcon/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
