import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import Button from '../Button'
import CompanyRegistrationFirstPage from '../CompanyRegistrationFirstPage'
import RegistrationConfirmation from '../RegistrationConfirmation'
import * as S from './CompanyRegistrationForm.style'

export type CompanyRegistrationFormProps = {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const CompanyRegistrationForm = ({
  currentPage,
  setCurrentPage,
}: CompanyRegistrationFormProps) => {
  return (
    <S.Wrapper>
      {currentPage === 1 ? (
        <CompanyRegistrationFirstPage />
      ) : (
        <RegistrationConfirmation
          isTrans={false}
          specificInstructions="Fale para nós um pouco sobre a sua empresa..."
          textAreaPlaceholder="Descreva aqui com o que a sua empresa faz, com o que trabalha, seus valores..."
        />
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

export default CompanyRegistrationForm
