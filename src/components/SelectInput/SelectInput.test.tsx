import React from 'react'

import { render, screen } from '@testing-library/react'

import SelectInput from '.'

test('that SelectInput renders properly', () => {
  render(<SelectInput name="template" options={['']} />)

  // expect(screen.getByRole('heading', { name: /SelectInput/i })).toBeInTheDocument()

  //expect(screen.getByRole()).toMatchSnapshot()
})
