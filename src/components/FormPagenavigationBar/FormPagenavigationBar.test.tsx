import React from 'react'

import { render, screen } from '@testing-library/react'

import FormPagenavigationBar from '.'

test('that FormPagenavigationBar renders properly', () => {
  render(<FormPagenavigationBar />)

  // expect(screen.getByRole('heading', { name: /FormPagenavigationBar/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
