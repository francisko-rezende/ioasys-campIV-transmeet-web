import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import Input from '../Input'
import SelectInput from '../SelectInput'
import { areaCodes } from '../SelectInput/areaCodes'
import { states } from '../SelectInput/states'
import * as S from './CompanyRegistrationFirstPage.style'

const TransGeneralInfo = () => {
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
      />
      <Input
        label="E-mail"
        inputType="email"
        name="email"
        {...emailProps}
        placeholder="email@email.com.br"
      />
      <S.PhoneLineWrapper>
        <SelectInput name="DDD" options={areaCodes} />
        <Input label="Telefone" inputType="tel" name="tel" {...phoneProps} />
      </S.PhoneLineWrapper>
      <Input
        label="Endereço completo"
        inputType="text"
        name="address"
        {...addressProps}
        placeholder="Avenida, Rua, Bairro, Número..."
      />
      <S.LocationLineWrapper>
        <Input label="Cidade" inputType="text" name="city" {...cityProps} />
        <SelectInput name="Estado" options={states} />
      </S.LocationLineWrapper>
      <Input
        label="CNPJ"
        inputType="tel"
        name="cnpj"
        placeholder="00.000.000/0001-00"
        {...cnpjProps}
      />
      <Input
        label="Site (opcional)"
        inputType="text"
        name="site"
        placeholder="www.empresa.com.br"
        {...siteProps}
      />
    </S.Form>
  )
}

export default TransGeneralInfo
