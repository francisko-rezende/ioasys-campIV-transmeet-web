import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import useFormValidation from '../../hooks/useFormValidation'
import BirthDate from '../BirthDate'
import Button from '../Button'
import Input from '../Input'
import SelectInput from '../SelectInput'
import { areaCodes } from '../SelectInput/areaCodes'
import { states } from '../SelectInput/states'
import * as S from './RegistrationForm.style'

const RegistrationForm = () => {
  const [activeForm, setActiveForm] = React.useState('Trans')

  type FormTypes = {
    Trans: React.ReactNode
    'Não Trans': React.ReactNode
    Empresa: React.ReactNode
  }

  const checkIfActive = (currentForm: string): boolean =>
    activeForm === currentForm ? true : false

  const nameProps = useFormValidation(false)
  const emailProps = useFormValidation('email')
  const phoneProps = useFormValidation('phone')
  const cityProps = useFormValidation(false)
  const cpfProps = useFormValidation('cpf')
  const otherProps = useFormValidation(false)

  const forms: FormTypes = {
    Trans: (
      <>
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
      </>
    ),
    'Não Trans': <h1>Registro de pessoa NÃO trans</h1>,
    Empresa: <h1>Registro de empresa</h1>,
  }

  // todo refactor this!
  // const handleSettingActiveForm = (
  //   e: Event & {
  //     target: HTMLButtonElement
  //   },
  // ) => setActiveForm(e.target.textContent!)

  return (
    <S.Container>
      <S.Title>Crie sua conta</S.Title>
      <S.Paragraph>
        Selecione quem está se registrando e preencha os dados básicos
        solicitados
      </S.Paragraph>
      <S.TagContainer>
        <Button
          onClick={(e) => setActiveForm(e.target.textContent!)}
          isActive={checkIfActive('Trans')}
        >
          Trans
        </Button>
        <Button
          onClick={(e) => setActiveForm(e.target.textContent!)}
          isActive={checkIfActive('Não Trans')}
        >
          Não Trans
        </Button>
        <Button
          onClick={(e) => setActiveForm(e.target.textContent!)}
          isActive={checkIfActive('Empresa')}
        >
          Empresa
        </Button>
      </S.TagContainer>
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
      <Button color="secondary" icon={<Chevron />} length="long">
        Continuar
      </Button>
    </S.Container>
  )
}

export default RegistrationForm
