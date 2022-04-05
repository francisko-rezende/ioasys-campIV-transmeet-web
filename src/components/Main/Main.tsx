import React from 'react'

import axios from 'axios'

import api from '../../services/api'
import * as S from './styles'

const Main = ({
  title = 'CRA Project Starter',
  description = 'A CRA template that includes ESLINT/Prettier, Styled Components and Storybook',
}) => {
  React.useEffect(() => {
    interface Payload {
      id?: string
      name: string
      email: string
      password: string
      cpf: string
      birthday_date: string
      address: string
      gender: string
    }

    const payload: Payload = {
      name: 'Jair Rodrigues',
      email: 'jairr@gmail.com',
      password: '12345678',
      cpf: '999999999',
      birthday_date: '15/07/1960',
      address: 'Rua dos Bobos, número 0',
      gender: 'Masculino',
    }

    // fetch('https://transmeet.herokuapp.com/user', {
    //   method: 'POST',
    //   body: JSON.stringify(payload),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))

    // axios
    //   .post('https://transmeet.herokuapp.com/user', payload)
    //   .then(({ data }) => console.log(data))
    //   .catch((error) => console.log(error))

    // axios
    //   .post('https://jsonplaceholder.typicode.com/posts', {
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   })
    //   .then(({ data }) => console.log(data))
    //   .catch((error) => console.log(error))

    // api
    //   .post('/user', payload)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error))
  }, [])

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Main
