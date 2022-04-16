import React from 'react'

import Button from '../Button'
import CompanyRegistrationForm from '../CompanyRegistrationForm'
import FormPagenavigationBar from '../FormPagenavigationBar'
import TransRegistrationForm from '../TransRegistrationForm'
import * as S from './RegistrationForm.style'

export type Pages = '1' | '2'

const RegistrationForm = () => {
  const [activeForm, setActiveForm] = React.useState('Trans')
  const [currentPage, setCurrentPage] = React.useState<Pages>('1')

  type FormTypes = {
    Trans: React.ReactNode
    // 'Não Trans': React.ReactNode
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
    // 'Não Trans': <h1>Cadastro de pessoa NÃO trans</h1>,
    Empresa: (
      <CompanyRegistrationForm
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    ),
  }

  const handleSettingActiveForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> & {
      target: HTMLButtonElement
    },
  ): void => setActiveForm(e.target.textContent!)

  return (
    <S.Container>
      <S.Title>Crie sua conta</S.Title>

      {currentPage === '1' && (
        <>
          <S.Paragraph>
            Selecione quem está se registrando e preencha os dados básicos
            solicitados
          </S.Paragraph>
          <S.TagContainer>
            <Button
              onClick={handleSettingActiveForm}
              isActive={checkIfActive('Trans')}
            >
              Trans
            </Button>
            {/* <Button
            onClick={handleSettingActiveForm}
            isActive={checkIfActive('Não Trans')}
          >
            Não Trans
          </Button> */}
            <Button
              onClick={handleSettingActiveForm}
              isActive={checkIfActive('Empresa')}
            >
              Empresa
            </Button>
          </S.TagContainer>
        </>
      )}
      {forms[activeForm as keyof FormTypes]}
      <S.FormNavigationBarWrapper>
        <FormPagenavigationBar
          currentPage={currentPage}
          activeOnPage={'1'}
          setCurrentPage={setCurrentPage}
        />
        <FormPagenavigationBar
          currentPage={currentPage}
          activeOnPage={'2'}
          setCurrentPage={setCurrentPage}
        />
      </S.FormNavigationBarWrapper>
    </S.Container>
  )
}

export default RegistrationForm
