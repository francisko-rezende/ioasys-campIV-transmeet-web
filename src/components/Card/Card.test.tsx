import React from 'react'

import { render, screen } from '@testing-library/react'

import Card from '.'

test('that Card renders properly', () => {
  render(<Card matchStatus="underway" />)

  // expect(screen.getByRole('heading', { name: /Card/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
