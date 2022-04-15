import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import { CompanyInputs } from '../CompanyRegistrationForm/CompanyRegistrationForm'
import Input from '../Input'
import SelectInput from '../SelectInput'
import { areaCodes } from '../SelectInput/areaCodes'
import { states } from '../SelectInput/states'
import * as S from './CompanyRegistrationFirstPage.style'

export type CompanyRegistrationFormFirstPageProps = {
  inputs: CompanyInputs
  setInputs: React.Dispatch<React.SetStateAction<CompanyInputs>>
}

const CompanyRegistrationFormFirstPage = ({
  inputs,
  setInputs,
}: CompanyRegistrationFormFirstPageProps) => {
  const nameProps = useFormValidation(false)
  const emailProps = useFormValidation('email')
  const phoneProps = useFormValidation('phone')
  const cityProps = useFormValidation(false)
  const cnpjProps = useFormValidation('cnpj')
  const siteProps = useFormValidation(false)
  const addressProps = useFormValidation(false)

  return (
    <S.Form>
      <Input
        label="Nome da Empresa/Instituição"
        inputType="text"
        name="nome"
        {...nameProps}
        placeholder="Escreva aqui"
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
        placeholder="email@email.com.br"
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
      <Input
        label="Endereço completo"
        inputType="text"
        name="address"
        {...addressProps}
        placeholder="Avenida, Rua, Bairro, Número..."
        value={inputs.address}
        onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
      />
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
          onChange={(e) => setInputs({ ...inputs, state: e.target.value })}
        />
      </S.LocationLineWrapper>
      <Input
        label="CNPJ"
        inputType="tel"
        name="cnpj"
        placeholder="00.000.000/0001-00"
        {...cnpjProps}
        value={inputs.cnpj}
        onChange={(e) => setInputs({ ...inputs, cnpj: e.target.value })}
      />
      <Input
        label="Site (opcional)"
        inputType="text"
        name="site"
        placeholder="www.empresa.com.br"
        {...siteProps}
        value={inputs.site}
        onChange={(e) => setInputs({ ...inputs, site: e.target.value })}
      />
    </S.Form>
  )
}

export default CompanyRegistrationFormFirstPage
