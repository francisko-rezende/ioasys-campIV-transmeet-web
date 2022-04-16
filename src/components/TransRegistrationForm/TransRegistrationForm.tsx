import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import api from '../../Services/api'
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

export type Payload = {
  name: string
  email: string
  password: string
  regNumber: string
  birthDate?: string
  address: string
  gender?: string
  description: string
  telephone: string
  city: string
  stateId: number | undefined
  typeId: 1 | 2
}

const getStateId = (stateName: string) =>
  ({
    Acre: 1,
    Alagoas: 2,
    Amapá: 3,
    Amazonas: 4,
    Bahia: 5,
    Ceará: 6,
    'Espírito Santo': 7,
    Goiás: 8,
    Maranhão: 9,
    'Mato Grosso': 10,
    'Mato Grosso do Sul': 11,
    'Minas Gerais': 12,
    Pará: 13,
    Paraná: 14,
    Paraíba: 15,
    Pernambuco: 16,
    Piauí: 17,
    'Rio de Janeiro': 18,
    'Rio Grande do Norte': 19,
    'Rio Grande do Sul': 20,
    Rondônia: 21,
    Roraima: 22,
    'Santa Catarina': 23,
    'São Paulo': 24,
    Sergipe: 25,
    Tocantins: 26,
    'Distrito Federal': 27,
  }[stateName])

const generatePayload = (inputs: TransInputs): Payload => {
  const {
    name,
    email,
    password,
    birthDate,
    address,
    genderSelect: gender,
    description,
    city,
    state,
    areaCode,
    phoneNumber,
    cpf: regNumber,
  } = inputs

  return {
    name,
    email,
    password,
    regNumber,
    birthDate,
    address,
    gender,
    description,
    telephone: `${areaCode}${phoneNumber}`,
    city,
    stateId: getStateId(state),
    typeId: 1,
  }
}

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
            // onClick={() => api.post('/users', generatePayload(inputs))}
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
