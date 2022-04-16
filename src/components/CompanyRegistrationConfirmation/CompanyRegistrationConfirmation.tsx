import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import api from '../../Services/api'
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
    </>
  )
}

export default CompanyRegistrationConfirmation
