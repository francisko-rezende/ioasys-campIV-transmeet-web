import React from 'react'

import { render, screen } from '@testing-library/react'

import SearchSection from '.'

test('that SearchSection renders properly', () => {
  render(<SearchSection />)

  expect(screen.getByRole('heading', { name: /SearchSection/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
