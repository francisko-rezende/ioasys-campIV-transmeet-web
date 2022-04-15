import React from 'react'

import { ReactComponent as Chevron } from '../../assets/icons/Vector.svg'
import Button from '../Button'
import RegistrationConfirmation from '../RegistrationConfirmation'
import TransRegistrationFirstPage from '../TransRegistrationFirstPage'
import * as S from './TransRegistrationForm.style'

export type TransRegistrationFormProps = {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export type StateId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27

export type User = {
  name: string
  email: string
  password: string
  regNumber: string
  birthDate: string
  address: string
  gender: string
  description: string
  telephone: string
  city: string
  stateId: number | undefined
  typeId: 1 | 2
}

const TransRegistrationForm = ({
  currentPage,
  setCurrentPage,
}: TransRegistrationFormProps) => {
  const generateRegNumber = () => String(Math.floor(Math.random() * 100000000))

  const [agreesWithTerms, setAgreesWithTerms] = React.useState(false)

  const [user, setUser] = React.useState<User>({
    name: '',
    email: '',
    password: '',
    regNumber: generateRegNumber(),
    birthDate: '',
    address: '',
    gender: '',
    description: '',
    telephone: '',
    city: '',
    stateId: 1,
    typeId: 1,
  })

  return (
    <S.Wrapper>
      {currentPage === 1 ? (
        <TransRegistrationFirstPage user={user} setUser={setUser} />
      ) : (
        <RegistrationConfirmation
          agreesWithTerms={agreesWithTerms}
          setAgreesWithTerms={setAgreesWithTerms}
          user={user}
          setUser={setUser}
          isTrans={true}
          specificInstructions="Fale para nós um pouco sobre seus interesses..."
          textAreaPlaceholder="Descreva aqui com o que gostaria de estudar e trabalhar, suas
        habilidades..."
        />
      )}
      <S.ContinueButtonWrapper>
        {currentPage === 1 ? (
          <Button
            color="secondary"
            icon={<Chevron />}
            length="long"
            onClick={() => setCurrentPage(2)}
          >
            Continuar
          </Button>
        ) : (
          <Button
            color="secondary"
            length="full"
            onClick={() => console.log('cliquei')}
            disabled={!agreesWithTerms}
          >
            Criar conta
          </Button>
        )}
      </S.ContinueButtonWrapper>
    </S.Wrapper>
  )
}

export default TransRegistrationForm
