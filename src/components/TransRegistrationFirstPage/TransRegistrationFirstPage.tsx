import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import BirthDate from '../BirthDate'
import Input from '../Input'
import SelectInput from '../SelectInput'
import { areaCodes } from '../SelectInput/areaCodes'
import { states } from '../SelectInput/states'
import { TransInputs } from '../TransRegistrationForm/TransRegistrationForm'
import * as S from './TransRegistrationFirstPage.style'

export type TransRegistrationFirstPageProps = {
  inputs: TransInputs
  setInputs: React.Dispatch<React.SetStateAction<TransInputs>>
}

const TransRegistrationFirstPage = ({
  inputs,
  setInputs,
}: TransRegistrationFirstPageProps) => {
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
        value={inputs.name}
        onChange={(e) => {
          setInputs({ ...inputs, name: e.target.value })
        }}
      />
      <Input
        label="E-mail"
        inputType="email"
        name="email"
        {...emailProps}
        placeholder="paloma@email.com.br"
        value={inputs.email}
        onChange={(e) => {
          setInputs({ ...inputs, email: e.target.value })
        }}
      />
      <S.PhoneLineWrapper>
        <SelectInput
          name="DDD"
          options={areaCodes}
          value={inputs.areaCode}
          onChange={(e) => {
            setInputs({ ...inputs, areaCode: e.target.value })
          }}
        />
        <Input
          label="Telefone"
          inputType="tel"
          name="tel"
          {...phoneProps}
          value={inputs.phoneNumber}
          onChange={(e) => {
            setInputs({ ...inputs, phoneNumber: e.target.value })
          }}
        />
      </S.PhoneLineWrapper>
      <S.LocationLineWrapper>
        <Input
          label="Cidade"
          inputType="text"
          name="city"
          {...cityProps}
          value={inputs.city}
          onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
        />
        <SelectInput
          name="Estado"
          options={states}
          value={inputs.state}
          onChange={(e) => {
            setInputs({ ...inputs, state: e.target.value })
          }}
        />
      </S.LocationLineWrapper>
      <BirthDate
        value={inputs.birthDate}
        onChange={(e) => {
          setInputs({ ...inputs, birthDate: e.target.value })
        }}
      />
      <Input label="CPF" inputType="tel" name="cpf" {...cpfProps} />
      <S.GenderLineWrapper>
        <SelectInput
          name="Gênero"
          value={inputs.genderSelect}
          onChange={(e) => {
            setInputs({ ...inputs, genderSelect: e.target.value })
          }}
          options={['Feminino', 'Masculino', 'Não Binário', 'Outro']}
        />
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
