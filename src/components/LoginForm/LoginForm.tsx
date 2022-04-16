import React from 'react'

import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg'
import { ReactComponent as Logo } from '../../assets/icons/logo-central-color.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg'
import api from '../../Services/api'
import Button from '../Button'
import InputWithIcon from '../InputWithIcon'
import * as S from './LoginForm.style'

const LoginForm = () => {
  // todo setup context for saving account info and token

  const [userEmail, setUserEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <S.Form>
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
          name="email"
          icon={<MailIcon />}
          value={'carla@gmail.com'} // todo replace with email state later
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required
        />
        <InputWithIcon
          required
          label="Password"
          type="password"
          name="password"
          icon={<LockIcon />}
          value={'Amarelo34'} // todo replace with password state later
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserEmail(e.target.value)
          }
        />
      </S.InputsWrapper>
      <S.Link>Esqueci minha senha</S.Link>
      <Button
        length="full"
        color="secondary"
        type="submit"
        onClick={async (e) => {
          e.preventDefault()

          const {
            data: { access_token, account },
          } = await api.post('/login', {
            email: 'carla@gmail.com',
            password: 'Amarelo34',
          })
          // console.log(access_token, account)

          const users = await api.get('/users', {
            headers: {
              authorization: `Bearer ${access_token}`,
            },
          })

          // const sponsors = await api.get('/sponsors', {
          //   headers: {
          //     Authorization: token,
          //   },
          // })
          console.log(users)
          // console.log(sponsors)
        }}
      >
        Fazer login
      </Button>
      <S.RegisterText>
        Ainda não tem uma conta? <S.Link>Cadastre-se aqui</S.Link>.
      </S.RegisterText>
      <S.SocialNetworksDivider>ou entre usando</S.SocialNetworksDivider>
    </S.Form>
  )
}

export default LoginForm
