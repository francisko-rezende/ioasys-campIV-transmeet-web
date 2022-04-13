import React from 'react'

import LoginForm from '../LoginForm'
import Onboarding from '../Onboarding'
import * as S from './LoginPage.style'

const LoginPage = () => {
  return (
    <S.Background>
      <S.FormContainer>
        <LoginForm />
      </S.FormContainer>
      <S.OnboardingContainer>
        <Onboarding />
      </S.OnboardingContainer>
    </S.Background>
  )
}

export default LoginPage
