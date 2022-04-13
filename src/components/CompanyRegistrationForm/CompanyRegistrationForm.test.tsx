import React from 'react'

import { render } from '@testing-library/react'

import CompanyRegistrationForm from '.'

test('that CompanyRegistrationForm renders properly', () => {
  render(
    <CompanyRegistrationForm
      currentPage={1}
      setCurrentPage={() => console.log('pagina')}
    />,
  )

  //expect(screen.getByRole()).toMatchSnapshot()
})
