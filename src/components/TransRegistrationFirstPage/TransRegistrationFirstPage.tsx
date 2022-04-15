import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import BirthDate from '../BirthDate'
import Input from '../Input'
import SelectInput from '../SelectInput'
import { areaCodes } from '../SelectInput/areaCodes'
import { states } from '../SelectInput/states'
import { User } from '../TransRegistrationForm/TransRegistrationForm'
import * as S from './TransRegistrationFirstPage.style'

export type TransRegistrationFirstPageProps = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
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

const TransRegistrationFirstPage = ({
  user,
  setUser,
}: TransRegistrationFirstPageProps) => {
  const nameProps = useFormValidation(false)
  const emailProps = useFormValidation('email')
  const phoneProps = useFormValidation('phone')
  const cityProps = useFormValidation(false)
  const cpfProps = useFormValidation('cpf')
  const otherProps = useFormValidation(false)

  const [areaCode, setAreaCode] = React.useState('')
  const [state, setState] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')

  React.useEffect(() => {
    setUser({ ...user, stateId: getStateId(state) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  React.useEffect(() => {
    setUser({ ...user, telephone: `${areaCode}${phoneNumber}` })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areaCode, phoneNumber])

  React.useEffect(() => {
    setUser({ ...user, gender })
  }, [gender])

  return (
    <S.Form>
      <Input
        label="Nome Social Completo"
        inputType="text"
        name="nome"
        {...nameProps}
        placeholder="Paloma Bernardi"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value })
        }}
      />
      <Input
        label="E-mail"
        inputType="email"
        name="email"
        {...emailProps}
        placeholder="paloma@email.com.br"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value })
        }}
      />
      <S.PhoneLineWrapper>
        <SelectInput
          name="DDD"
          options={areaCodes}
          value={areaCode}
          onChange={setAreaCode}
        />
        <Input
          label="Telefone"
          inputType="tel"
          name="tel"
          {...phoneProps}
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value)
          }}
        />
      </S.PhoneLineWrapper>
      <S.LocationLineWrapper>
        <Input
          label="Cidade"
          inputType="text"
          name="city"
          {...cityProps}
          value={user.city}
          onChange={(e) => setUser({ ...user, city: e.target.value })}
        />
        <SelectInput
          name="Estado"
          options={states}
          value={state}
          onChange={setState}
        />
      </S.LocationLineWrapper>
      <BirthDate value={user.birthDate} setUser={setUser} />
      <Input label="CPF" inputType="tel" name="cpf" {...cpfProps} />
      <S.GenderLineWrapper>
        <SelectInput
          name="Gênero"
          value={gender}
          onChange={setGender}
          options={['Feminino', 'Masculino', 'Não Binário']}
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
