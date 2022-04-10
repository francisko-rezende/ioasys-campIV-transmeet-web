import React from 'react'

import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg'
import { ReactComponent as Logo } from '../../assets/icons/logo-central-color.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg'
import Button from '../Button'
import InputWithIcon from '../InputWithIcon'
import * as S from './LoginForm.style'

const LoginForm = () => {
  const [userEmail, setUserEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.Title>Acesse sua conta</S.Title>
      <S.Subtitle>
        Faça seu login e aproveite as oportunidades que estão a sua espera!
      </S.Subtitle>
      <S.InputsWrapper>
        <InputWithIcon
          label="E-mail"
          type="email"
          icon={<MailIcon />}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <InputWithIcon
          label="Password"
          type="password"
          icon={<LockIcon />}
          value={userEmail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserEmail(e.target.value)
          }
        />
      </S.InputsWrapper>
      <S.Link>Esqueci minha senha</S.Link>
      <Button length="full" color="secondary">
        Fazer login
      </Button>
      <S.RegisterText>
        Ainda não tem uma conta? <S.Link>Cadastre-se aqui</S.Link>.
      </S.RegisterText>
    </S.Wrapper>
  )
}

export default LoginForm
