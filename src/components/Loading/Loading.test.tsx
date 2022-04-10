import React from 'react'

import { render, screen } from '@testing-library/react'

import Loading from '.'

test('that Loading renders properly', () => {
  render(<Loading />)

  expect(screen.getByRole('heading', { name: /Loading/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
