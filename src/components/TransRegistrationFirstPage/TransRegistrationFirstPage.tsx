import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import BirthDate from '../BirthDate'
import Input from '../Input'
import SelectInput from '../SelectInput'
import { areaCodes } from '../SelectInput/areaCodes'
import { states } from '../SelectInput/states'
import { Inputs } from '../TransRegistrationForm/TransRegistrationForm'
import * as S from './TransRegistrationFirstPage.style'

export type TransRegistrationFirstPageProps = {
  inputs: Inputs
  setInputs: React.Dispatch<React.SetStateAction<Inputs>>
}

const getStatefromStateId = (stateID: number): string => {
  const index = String(stateID)
  type States = {
    '1': string
    '2': string
    '3': string
    '4': string
    '5': string
    '6': string
    '7': string
    '8': string
    '9': string
    '10': string
    '11': string
    '12': string
    '13': string
    '14': string
    '15': string
    '16': string
    '17': string
    '18': string
    '19': string
    '20': string
    '21': string
    '22': string
    '23': string
    '24': string
    '25': string
    '26': string
    '27': string
  }

  const stateNames: States = {
    '1': 'Acre',
    '2': 'Alagoas',
    '3': 'Amapá',
    '4': 'Amazonas',
    '5': 'Bahia',
    '6': 'Ceará',
    '7': 'Espírito Santo',
    '8': 'Goiás',
    '9': 'Maranhão',
    '10': 'Mato Grosso',
    '11': 'Mato Grosso do Sul',
    '12': 'Minas Gerais',
    '13': 'Pará',
    '14': 'Paraná',
    '15': 'Paraíba',
    '16': 'Pernambuco',
    '17': 'Piauí',
    '18': 'Rio de Janeiro',
    '19': 'Rio Grande do Nort',
    '20': 'Rio Grande do Sul',
    '21': 'Rondônia',
    '22': 'Roraima',
    '23': 'Santa Catarina',
    '24': 'São Paulo',
    '25': 'Sergipe',
    '26': 'Tocantins',
    '27': 'Distrito Federal',
  }

  return stateNames[index as keyof States]
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
          console.log(inputs)
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
