import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import BirthDate from '../BirthDate'
import Input from '../Input'
import SelectInput from '../SelectInput'
import { areaCodes } from '../SelectInput/areaCodes'
import { states } from '../SelectInput/states'
import * as S from './TransRegistrationFirstPage.style'

const TransRegistrationFirstPage = () => {
  const nameProps = useFormValidation(false)
  const emailProps = useFormValidation('email')
  const phoneProps = useFormValidation('phone')
  const cityProps = useFormValidation(false)
  const cpfProps = useFormValidation('cpf')
  const otherProps = useFormValidation(false)

  return (
    <S.Form>
      <Input
        label="Nome Social Completo"
        inputType="text"
        name="nome"
        {...nameProps}
        placeholder="Paloma Bernardi"
      />
      <Input
        label="E-mail"
        inputType="email"
        name="email"
        {...emailProps}
        placeholder="paloma@email.com.br"
      />
      <S.PhoneLineWrapper>
        <SelectInput name="DDD" options={areaCodes} />
        <Input label="Telefone" inputType="tel" name="tel" {...phoneProps} />
      </S.PhoneLineWrapper>
      <S.LocationLineWrapper>
        <Input label="Cidade" inputType="text" name="city" {...cityProps} />
        <SelectInput name="Estado" options={states} />
      </S.LocationLineWrapper>
      <BirthDate />
      <Input label="CPF" inputType="tel" name="cpf" {...cpfProps} />
      <S.GenderLineWrapper>
        <SelectInput name="Gênero" />
        <Input
          label="Outro? Qual?"
          inputType="text"
          name="other"
          {...otherProps}
        />
      </S.GenderLineWrapper>
    </S.Form>
  )
}

export default TransRegistrationFirstPage
