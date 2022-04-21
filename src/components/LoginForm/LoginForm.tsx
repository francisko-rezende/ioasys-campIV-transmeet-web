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

          const palacio = {
            name: 'O Palácio do Estrogonofe',
            email: 'estrogonofe@palacio.com',
            password: 'Estrogonofe123',
            regNumber: '12345678/0001',
            address: 'Rua 9, Bairo dos Alecrins',
            description:
              'Estrogonofe é um prato originário da culinária russa composto de cubos de carne bovina servidos num molho de creme de leite. Desde suas origens no século XIX, o prato popularizou-se em muitos países europeus, norte-americanos e no Brasil, sempre com variações consideráveis da receita original. Nós fazemos o melhor estrognofe da nossa rua, altamente elogiado pelo Adriano Imperador. Venha nos prestigiar!',
            telephone: '01140028922',
            city: 'São Paulo',
            site: 'palaciodoestronofe.com.br',
            stateId: 24,
            typeId: 2,
          }
          // id31

          const marcio = {
            name: 'Marcio Campos',
            email: 'marcio@gmail.com',
            password: 'Marcio123',
            regNumber: '12345678',
            birthDate: '03/03/1996',
            address: 'Rua Americo Silva, Bairo recreio',
            gender: 'Masculino',
            description:
              'Difícil falar de nós mesmos. Sou autêntico, cavalheiro, romântico, carinhoso, sempre muito sincero e simples. Adoro uma boa conversa, boa música e boa companhia.',
            telephone: '01140028922',
            city: 'São Paulo',
            stateId: 24,
            typeId: 1,
          }
          //id 32

          // todo cadastro sponsor
          // const response = await api.post('/sponsors', palacio)
          // console.log(response)

          // todo cadastro usuario
          // const response = await api.post('/users', marcio)
          // console.log(response)

          //todo login sponsor
          // const {
          //   data: { access_token, account },
          // } = await api.post('/login', {
          //   email: 'estrogonofe@palacio.com',
          //   password: 'Estrogonofe123',
          // })
          // console.log(account)

          //todo login usuario
          // const {
          //   data: { access_token, account },
          // } = await api.post('/login', {
          //   email: 'marcio@gmail.com',
          //   password: 'Marcio123',
          // })
          // console.log(account)

          //todo carregar patrocinadores quando logar com usuario
          // const response = await api.get('/sponsors', {
          //   headers: {
          //     authorization: `Bearer ${access_token}`,
          //   },
          // })
          // console.log(response)

          //todo carregar todos os usuarios quando logar com sponsor
          // const response = await api.get('/users', {
          //   headers: {
          //     authorization: `Bearer ${access_token}`,
          //   },
          // })
          // console.log(response)

          //todo carregar usuarios que mandaram request quando logar com sponsor
          // const response = await api.get(`/match/sponsors/${account.id}`, {
          //   headers: {
          //     authorization: `Bearer ${access_token}`,
          //   },
          // })
          // console.log(response)

          // todo pedido de patrocinio
          // const response = await api.post(
          //   '/match',
          //   {
          //     idUser: account.id,
          //     idSponsor: 19,
          //   },
          //   {
          //     headers: {
          //       authorization: `Bearer ${access_token}`,
          //     },
          //   },
          // )
          // console.log(response)

          // todo busca de solicitacoes usuario
          // const response = await api.get(`/match/users/${account.id}`, {
          //   headers: {
          //     authorization: `Bearer ${access_token}`,
          //   },
          // })
          // console.log(response)

          // todo busca de solicitacoes sponsor
          // const { data } = await api.get(`/match/sponsors/${account.id}`, {
          //   headers: {
          //     authorization: `Bearer ${access_token}`,
          //   },
          // })
          // console.log(data)
          // console.log(data[1].id)

          // todo cofirmacao de patrocinio
          // const response = await api.patch(
          //   `/match/${sponsorshipRequest.id}`,
          //   { response: 'true' },
          //   {
          //     headers: {
          //       authorization: `Bearer ${access_token}`,
          //     },
          //   },
          // )

          // todo recusa de patrocinio
          // const response = await api.patch(
          //   `/match/9`,
          //   { response: false },
          //   {
          //     headers: {
          //       authorization: `Bearer ${access_token}`,
          //     },
          //   },
          // )

          // console.log(response)

          // requests de busca de match devem bater no mesmo tipo de usuario (user buscando match chama match/users)
          // const users = await api.get(`/match/users/${account.id}`, {
          //   headers: {
          //     authorization: `Bearer ${access_token}`,
          //   },
          // })

          // console.log(users)
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
