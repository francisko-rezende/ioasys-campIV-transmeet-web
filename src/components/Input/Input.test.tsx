import React from 'react'

import { render, screen } from '@testing-library/react'

import Input from '.'

test('that Input renders properly', () => {
  // render(<Input />)

  expect(screen.getByRole('heading', { name: /Input/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
