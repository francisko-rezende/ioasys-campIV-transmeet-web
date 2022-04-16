import React, { Dispatch, SetStateAction } from 'react'

import { Pages } from '../RegistrationForm/RegistrationForm'
import * as S from './FormPagenavigationBar.style'

export type FormPageNavigationBarProps = {
  currentPage: Pages
  setCurrentPage: Dispatch<SetStateAction<Pages>>
  activeOnPage: Pages
}

const FormPagenavigationBar = ({
  currentPage,
  activeOnPage,
  setCurrentPage,
}: FormPageNavigationBarProps) => {
  const isActive = currentPage === activeOnPage
  const handlePageChange = (
    activeOnPage: Pages,
    // currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<Pages>>,
  ) => {
    activeOnPage === '1' ? setCurrentPage('1') : setCurrentPage('2')
  }

  return (
    <S.Button
      isActive={isActive}
      onClick={() => handlePageChange(activeOnPage, setCurrentPage)}
    ></S.Button>
  )
}

export default FormPagenavigationBar
