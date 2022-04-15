import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import AcceptTermsRadio from '../AcceptTermsCheckbox'
import Input from '../Input'
import InputWithIcon from '../InputWithIcon'
import { Inputs } from '../TransRegistrationForm/TransRegistrationForm'
import * as S from './RegistrationConfirmation.style'

export type RegistrationConfirmationProps = {
  isTrans: boolean
  specificInstructions: string
  inputs: Inputs
  setInputs: React.Dispatch<React.SetStateAction<Inputs>>
  agreesWithTerms: boolean
  setAgreesWithTerms: React.Dispatch<React.SetStateAction<boolean>>
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

const generateRegNumber = () => String(Math.floor(Math.random() * 100000000))

const generatePayload = (inputs: Inputs, isTrans: boolean): Payload => {
  const {
    name,
    email,
    password,
    birthDate,
    genderSelect: gender,
    description,
    city,
    areaCode,
    phoneNumber,
  } = inputs

  return {
    name,
    email,
    password,
    regNumber: generateRegNumber(),
    birthDate,
    address: 'Rua dos bobos, número 0',
    gender,
    description,
    telephone: `${areaCode}${phoneNumber}`,
    city,
    stateId: 1,
    typeId: isTrans ? 1 : 2,
  }
}

const RegistrationConfirmation = ({
  agreesWithTerms,
  setAgreesWithTerms,
  inputs,
  setInputs,
  isTrans,
  specificInstructions,
}: RegistrationConfirmationProps) => {
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

  const checkboxLabel = isTrans
    ? `Ao criar a conta, eu afirmo que me defino como pessoa Trans e que ${(
        <strong>concordo com os termos</strong>
      )}.`
    : `Ao criar a conta, eu afirmo que ${(
        <strong>concordo com os termos</strong>
      )}.`

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
          inputs={inputs}
          type="password"
          value={inputs.confirmPassword}
          onChange={checkIfPasswordsMatch}
          error={confirmPasswordError}
        />
        <AcceptTermsRadio
          label={checkboxLabel}
          agreesWithTerms={agreesWithTerms}
          setAgreesWithTerms={setAgreesWithTerms}
        />
      </S.Form>
      <button onClick={() => console.log(generatePayload(inputs, isTrans))}>
        Imprime carai
      </button>
    </>
  )
}

export default RegistrationConfirmation
