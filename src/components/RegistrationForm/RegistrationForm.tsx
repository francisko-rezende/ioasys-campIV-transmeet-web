import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import Button from '../Button'
import TransGeneralInfo from '../TransGeneralInfo'
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

  const forms: FormTypes = {
    Trans: <TransGeneralInfo />,
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
      {forms[activeForm as keyof FormTypes]}
      <Button color="secondary" icon={<Chevron />} length="long">
        Continuar
      </Button>
    </S.Container>
  )
}

export default RegistrationForm
