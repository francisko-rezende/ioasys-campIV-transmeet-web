import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import Button from '../Button'
import { Pages } from '../RegistrationForm/RegistrationForm'
import TransRegistrationConfirmation from '../TransRegistrationConfirmation'
import TransRegistrationFirstPage from '../TransRegistrationFirstPage'
import * as S from './TransRegistrationForm.style'

export type TransRegistrationFormProps = {
  currentPage: Pages
  setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>
}

export type TransInputs = {
  name: string
  email: string
  areaCode: string
  phoneNumber: string
  city: string
  state: string
  address: string
  birthDate: string
  cpf: string
  genderSelect: string
  genderOther: string
  description: string
  password: string
  confirmPassword: string
}

//todo change page from number to discrete entity

const TransRegistrationForm = ({
  currentPage,
  setCurrentPage,
}: TransRegistrationFormProps) => {
  const [agreesWithTerms, setAgreesWithTerms] = React.useState(false)

  const [inputs, setInputs] = React.useState<TransInputs>({
    name: '',
    email: '',
    areaCode: 'Selecionar',
    phoneNumber: '',
    city: '',
    state: 'Selecionar',
    address: '',
    birthDate: '',
    cpf: '',
    genderSelect: 'Selecionar',
    genderOther: '',
    description:
      'Descreva aqui com o que gostaria de estudar e trabalhar, suas habilidades...',
    password: '',
    confirmPassword: '',
  })

  return (
    <S.Wrapper>
      {currentPage === '1' ? (
        <TransRegistrationFirstPage inputs={inputs} setInputs={setInputs} />
      ) : (
        <TransRegistrationConfirmation
          agreesWithTerms={agreesWithTerms}
          setAgreesWithTerms={setAgreesWithTerms}
          inputs={inputs}
          setInputs={setInputs}
          specificInstructions="Fale para nós um pouco sobre seus interesses..."
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
            onClick={() => console.log(inputs)}
            disabled={!agreesWithTerms}
          >
            Criar conta
          </Button>
        )}
      </S.ContinueButtonWrapper>
    </S.Wrapper>
  )
}

export default TransRegistrationForm
