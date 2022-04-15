import React from 'react'

import { Settings } from 'react-slick'

import { ReactComponent as LeftArrow } from '../../assets/icons/arrow-left.svg'
import { ReactComponent as RightArrow } from '../../assets/icons/arrow-right.svg'
import Onboarding from '../Onboarding'
import OnboardingSlide from '../OnboardingSlide'
import * as S from './LoginPage.style'

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,
}

export type LoginPageProps = {
  form: React.ReactNode
}

const LoginPage = ({ form }: LoginPageProps) => {
  return (
    <S.Background>
      <S.FormContainer>{form}</S.FormContainer>
      <S.OnboardingContainer>
        <S.OnboardingWrapper>
          <Onboarding settings={settings}>
            <OnboardingSlide>
              <div>
                <h1>Acesse sua conta</h1>
                <p>
                  Faça seu login e aproveite as oportunidades que estão a sua
                  espera!
                </p>
              </div>
            </OnboardingSlide>
            <OnboardingSlide>
              <div>
                <h1>Acesse sua conta</h1>
                <p>
                  Faça seu login e aproveite as oportunidades que estão a sua
                  espera!
                </p>
              </div>
            </OnboardingSlide>
            <OnboardingSlide>
              <div>
                <h1>Acesse sua conta</h1>
                <p>
                  Faça seu login e aproveite as oportunidades que estão a sua
                  espera!
                </p>
              </div>
            </OnboardingSlide>
            <OnboardingSlide>
              <div>
                <h1>Acesse sua conta</h1>
                <p>
                  Faça seu login e aproveite as oportunidades que estão a sua
                  espera!
                </p>
              </div>
            </OnboardingSlide>
          </Onboarding>
        </S.OnboardingWrapper>
      </S.OnboardingContainer>
    </S.Background>
  )
}

export default LoginPage
