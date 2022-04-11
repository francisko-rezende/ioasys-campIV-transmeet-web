import React from 'react'

import { render, screen } from '@testing-library/react'

import AcceptTermsCheckbox from '.'

test('that AcceptTermsRadio renders properly', () => {
  render(<AcceptTermsCheckbox label="label" />)

  // expect(screen.getByRole('heading', { name: /AcceptTermsRadio/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
