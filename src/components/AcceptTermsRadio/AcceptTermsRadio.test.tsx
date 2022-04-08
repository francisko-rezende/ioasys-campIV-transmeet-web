import React from 'react'

import { render, screen } from '@testing-library/react'

import AcceptTermsRadio from '.'

test('that AcceptTermsRadio renders properly', () => {
  render(<AcceptTermsRadio label="label" />)

  // expect(screen.getByRole('heading', { name: /AcceptTermsRadio/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
