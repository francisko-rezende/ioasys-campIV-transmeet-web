import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import Button from '../Button'
import RegistrationConfirmation from '../RegistrationConfirmation'
import TransRegistrationFirstPage from '../TransRegistrationFirstPage'
import * as S from './TransRegistrationForm.style'

export type TransRegistrationFormProps = {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export type StateId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27

export type Inputs = {
  name: string
  email: string
  areaCode: string
  phoneNumber: string
  city: string
  state: string
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

  const [inputs, setInputs] = React.useState<Inputs>({
    name: '',
    email: '',
    areaCode: 'Selecionar',
    phoneNumber: '',
    city: '',
    state: 'Selecionar',
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
      {currentPage === 1 ? (
        <TransRegistrationFirstPage inputs={inputs} setInputs={setInputs} />
      ) : (
        <RegistrationConfirmation
          agreesWithTerms={agreesWithTerms}
          setAgreesWithTerms={setAgreesWithTerms}
          inputs={inputs}
          setInputs={setInputs}
          isTrans={true}
          specificInstructions="Fale para nós um pouco sobre seus interesses..."
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
