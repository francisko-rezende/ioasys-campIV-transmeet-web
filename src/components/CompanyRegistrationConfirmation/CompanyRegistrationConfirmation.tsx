import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import AcceptTermsRadio from '../AcceptTermsCheckbox'
import { CompanyInputs } from '../CompanyRegistrationForm/CompanyRegistrationForm'
import Input from '../Input'
import InputWithIcon from '../InputWithIcon'
import * as S from './CompanyRegistrationConfirmation.style'

export type CompanyRegistrationConfirmationProps = {
  specificInstructions: string
  inputs: CompanyInputs
  setInputs: React.Dispatch<React.SetStateAction<CompanyInputs>>
  agreesWithTerms: boolean
  setAgreesWithTerms: React.Dispatch<React.SetStateAction<boolean>>
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

const CompanyRegistrationConfirmation = ({
  agreesWithTerms,
  setAgreesWithTerms,
  inputs,
  setInputs,
  specificInstructions,
}: CompanyRegistrationConfirmationProps) => {
  const passwordProps = useFormValidation('password')

  const [confirmPasswordError, setConfirmPasswordError] = React.useState('')

  const checkIfPasswordsMatch = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputs({ ...inputs, confirmPassword: e.target.value })
    if (e.target.value !== inputs?.password) {
      return setConfirmPasswordError('As senhas digitadas são diferentes')
    }
    setConfirmPasswordError('')
  }

  return (
    <>
      <S.GeneralInstructions>
        Preencha os campos abaixo para finalizar seu registro na Transmeet
      </S.GeneralInstructions>
      <S.SpecificInstructions>{specificInstructions}</S.SpecificInstructions>
      <S.Form>
        <S.TextArea
          value={inputs.description}
          onChange={(e) => {
            setInputs({ ...inputs, description: e.target.value })
          }}
          rows={10}
        ></S.TextArea>
        <Input
          label="Senha"
          inputType="password"
          name="senha"
          {...passwordProps}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputWithIcon
          label="Repita a senha"
          name="confirm password"
          type="password"
          value={inputs.confirmPassword}
          onChange={checkIfPasswordsMatch}
          error={confirmPasswordError}
        />
        <AcceptTermsRadio
          label={'Ao criar a conta, eu afirmo que '}
          agreesWithTerms={agreesWithTerms}
          setAgreesWithTerms={setAgreesWithTerms}
        />
      </S.Form>
      <button onClick={() => console.log(generatePayload(inputs))}>
        Imprime carai
      </button>
    </>
  )
}

export default CompanyRegistrationConfirmation
