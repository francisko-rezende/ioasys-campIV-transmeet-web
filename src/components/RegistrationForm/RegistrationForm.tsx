import React from 'react'

import Button from '../Button'
import FormPagenavigationBar from '../FormPagenavigationBar'
import TransRegistrationForm from '../TransRegistrationForm'
import * as S from './RegistrationForm.style'

const RegistrationForm = () => {
  const [activeForm, setActiveForm] = React.useState('Trans')
  const [currentPage, setCurrentPage] = React.useState(1)

  type FormTypes = {
    Trans: React.ReactNode
    'Não Trans': React.ReactNode
    Empresa: React.ReactNode
  }

  const checkIfActive = (currentForm: string): boolean =>
    activeForm === currentForm ? true : false

  const forms: FormTypes = {
    Trans: (
      <TransRegistrationForm
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
      {forms[activeForm as keyof FormTypes]}
      <S.FormNavigationBarWrapper>
        <FormPagenavigationBar
          currentPage={currentPage}
          activeOnPage={1}
          setCurrentPage={setCurrentPage}
        />
        <FormPagenavigationBar
          currentPage={currentPage}
          activeOnPage={2}
          setCurrentPage={setCurrentPage}
        />
      </S.FormNavigationBarWrapper>
    </S.Container>
  )
}

export default RegistrationForm
