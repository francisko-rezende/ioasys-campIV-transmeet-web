import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import Button from '../Button'
import RegistrationTransConfirmation from '../RegistrationTransConfirmation'
import TransGeneralInfo from '../TransGeneralInfo'
import * as S from './TransRegistrationForm.style'

export type TransRegistrationFormProps = {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const TransRegistrationForm = ({
  currentPage,
  setCurrentPage,
}: TransRegistrationFormProps) => {
  return (
    <S.Wrapper>
      {currentPage === 1 ? (
        <TransGeneralInfo />
      ) : (
        <RegistrationTransConfirmation specificInstructions="Fale para nós um pouco sobre seus interesses..." />
      )}
      <S.ContinueButtonWrapper>
        {currentPage === 1 ? (
          <Button
            color="secondary"
            icon={<Chevron />}
            length="long"
            onClick={() => setCurrentPage(2)}
          >
            Continuar
          </Button>
        ) : (
          <Button
            color="secondary"
            length="full"
            onClick={() => console.log('cliquei')}
          >
            Criar conta
          </Button>
        )}
      </S.ContinueButtonWrapper>
    </S.Wrapper>
  )
}

export default TransRegistrationForm
