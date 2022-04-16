import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import api from '../../Services/api'
import Button from '../Button'
import CompanyRegistrationConfirmation from '../CompanyRegistrationConfirmation'
import CompanyRegistrationFirstPage from '../CompanyRegistrationFirstPage'
import { Pages } from '../RegistrationForm/RegistrationForm'
import * as S from './CompanyRegistrationForm.style'

export type CompanyRegistrationFormProps = {
  currentPage: Pages
  setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>
}

export type Payload = {
  name: string
  email: string
  password: string
  regNumber: string
  address: string
  description: string
  telephone: string
  city: string
  site?: string
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

const generatePayload = (inputs: CompanyInputs): Payload => {
  const {
    name,
    email,
    password,
    description,
    city,
    state,
    address,
    areaCode,
    phoneNumber,
    site,
    cnpj: regNumber,
  } = inputs

  return {
    name,
    email,
    password,
    regNumber,
    address,
    description,
    telephone: `${areaCode}${phoneNumber}`,
    city,
    site,
    stateId: getStateId(state),
    typeId: 2,
  }
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
            type="submit"
            disabled={!agreesWithTerms}
            // onClick={() => api.post('/sponsors', generatePayload(inputs))}
            onClick={() => console.log(generatePayload(inputs))}
          >
            Criar conta
          </Button>
        )}
      </S.ContinueButtonWrapper>
    </S.Wrapper>
  )
}

export default CompanyRegistrationForm
