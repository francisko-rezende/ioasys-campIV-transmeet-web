import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import AcceptTermsRadio from '../AcceptTermsRadio'
import Input from '../Input'
import * as S from './RegistrationTransConfirmation.style'

const RegistrationTransConfirmation = () => {
  const passwordProps = useFormValidation('password')
  const confirmPasswordProps = useFormValidation(false)

  return (
    <>
      <S.Title>Crie sua conta</S.Title>
      <S.GeneralInstructions>
        Preencha os campos abaixo para finalizar seu registro na Transmeet
      </S.GeneralInstructions>
      <S.SpecificInstructions>
        Fale para nós um pouco sobre seus interesses...
      </S.SpecificInstructions>
      <S.Form>
        <S.TextArea
          defaultValue="Descreva aqui com o que gostaria de estudar e trabalhar, suas
          habilidades..."
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
          label={`Ao criar a conta, eu afirmo que me defino como pessoa Trans e que ${(
            <strong>concordo com os termos</strong>
          )}.`}
        />
      </S.Form>
    </>
  )
}

export default RegistrationTransConfirmation
