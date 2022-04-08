import React from 'react'

import * as S from './FormPagenavigationBar.style'

export type FormPagenavigationBarProps = {
  currentPage?: number
  activeOnPage?: number
}

const FormPagenavigationBar = ({
  currentPage,
  activeOnPage,
}: FormPagenavigationBarProps) => {
  const isActive = currentPage === activeOnPage

  console.log(isActive)

  return <S.Button isActive={isActive}></S.Button>
}

export default FormPagenavigationBar
