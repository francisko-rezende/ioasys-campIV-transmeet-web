import React from 'react'

import useFormValidation from '../../hooks/useFormValidation'
import Button from '../Button'
import Input from '../Input'
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
      <S.Form>{forms[activeForm as keyof FormTypes]}</S.Form>
    </S.Container>
  )
}

export default RegistrationForm
