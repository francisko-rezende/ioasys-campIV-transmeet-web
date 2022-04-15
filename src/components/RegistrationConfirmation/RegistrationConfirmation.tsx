import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import AcceptTermsRadio from '../AcceptTermsCheckbox'
import Input from '../Input'
import { User } from '../TransRegistrationForm/TransRegistrationForm'
import * as S from './RegistrationConfirmation.style'

export type RegistrationConfirmationProps = {
  isTrans: boolean
  specificInstructions: string
  textAreaPlaceholder: string
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  agreesWithTerms: boolean
  setAgreesWithTerms: React.Dispatch<React.SetStateAction<boolean>>
}

const RegistrationConfirmation = ({
  agreesWithTerms,
  setAgreesWithTerms,
  user,
  setUser,
  isTrans,
  specificInstructions,
  textAreaPlaceholder,
}: RegistrationConfirmationProps) => {
  const passwordProps = useFormValidation('password')
  const confirmPasswordProps = useFormValidation(false)

  const checkboxLabel = isTrans
    ? `Ao criar a conta, eu afirmo que me defino como pessoa Trans e que ${(
        <strong>concordo com os termos</strong>
      )}.`
    : `Ao criar a conta, eu afirmo que ${(
        <strong>concordo com os termos</strong>
      )}.`

  return (
    <>
      {/* <S.Title>Crie sua conta</S.Title> */}
      <S.GeneralInstructions>
        Preencha os campos abaixo para finalizar seu registro na Transmeet
      </S.GeneralInstructions>
      <S.SpecificInstructions>{specificInstructions}</S.SpecificInstructions>
      <S.Form>
        <S.TextArea
          value={user.description}
          onChange={(e) => {
            setUser({ ...user, description: e.target.value })
          }}
          defaultValue={textAreaPlaceholder}
          rows={10}
        ></S.TextArea>
        <Input
          label="Senha"
          inputType="password"
          name="senha"
          {...passwordProps}
        />
        <Input
          label="Repita a senha"
          inputType="password"
          name="Repita a senha"
          {...confirmPasswordProps}
        />
        <AcceptTermsRadio
          label={checkboxLabel}
          agreesWithTerms={agreesWithTerms}
          setAgreesWithTerms={setAgreesWithTerms}
        />
      </S.Form>
    </>
  )
}

export default RegistrationConfirmation
