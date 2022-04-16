import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import Button from '../Button'
import CompanyRegistrationConfirmation from '../CompanyRegistrationConfirmation'
import CompanyRegistrationFirstPage from '../CompanyRegistrationFirstPage'
import { Pages } from '../RegistrationForm/RegistrationForm'
import * as S from './CompanyRegistrationForm.style'

export type CompanyRegistrationFormProps = {
  currentPage: Pages
  setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>
}

export type CompanyInputs = {
  name: string
  email: string
  areaCode: string
  phoneNumber: string
  city: string
  state: string
  address: string
  cnpj: string
  site: string
  description: string
  password: string
  confirmPassword: string
}

const CompanyRegistrationForm = ({
  currentPage,
  setCurrentPage,
}: CompanyRegistrationFormProps) => {
  const [agreesWithTerms, setAgreesWithTerms] = React.useState(false)

  const [inputs, setInputs] = React.useState<CompanyInputs>({
    name: '',
    email: '',
    areaCode: 'Selecionar',
    phoneNumber: '',
    address: '',
    city: '',
    state: 'Selecionar',
    cnpj: '',
    site: '',
    description:
      'Descreva aqui com o que a sua empresa faz, com o que trabalha, seus valores...',
    password: '',
    confirmPassword: '',
  })

  return (
    <S.Wrapper>
      {currentPage === '1' ? (
        <CompanyRegistrationFirstPage inputs={inputs} setInputs={setInputs} />
      ) : (
        <CompanyRegistrationConfirmation
          agreesWithTerms={agreesWithTerms}
          setAgreesWithTerms={setAgreesWithTerms}
          inputs={inputs}
          setInputs={setInputs}
          specificInstructions="Descreva aqui com o que a sua empresa faz, com o que trabalha, seus valores..."
        />
      )}
      <S.ContinueButtonWrapper>
        {currentPage === '1' ? (
          <Button
            color="secondary"
            icon={<Chevron />}
            length="long"
            onClick={() => setCurrentPage('2')}
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
