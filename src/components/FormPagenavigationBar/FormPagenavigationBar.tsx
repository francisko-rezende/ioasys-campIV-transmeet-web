import React, { Dispatch, SetStateAction } from 'react'

import * as S from './FormPagenavigationBar.style'

export type FormPageNavigationBarProps = {
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  activeOnPage: number
}

const FormPagenavigationBar = ({
  currentPage,
  activeOnPage,
  setCurrentPage,
}: FormPageNavigationBarProps) => {
  const isActive = currentPage === activeOnPage
  const handlePageChange = (
    activeOnPage: number,
    // currentPage: number,
    setCurrentPage: (arg: number) => void,
  ) => {
    activeOnPage === 1 ? setCurrentPage(1) : setCurrentPage(2)
  }

  return (
    <S.Button
      isActive={isActive}
      onClick={() => handlePageChange(activeOnPage, setCurrentPage)}
    ></S.Button>
  )
}

export default FormPagenavigationBar
