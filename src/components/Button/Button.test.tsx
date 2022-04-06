import React from 'react'

import { render, screen } from '@testing-library/react'

import Button from '.'

test('that Button renders properly', () => {
  render(<Button>Button</Button>)

  expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
