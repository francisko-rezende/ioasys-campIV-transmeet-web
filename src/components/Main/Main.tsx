/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import axios from 'axios'

import jsonPlaceholderCode from '../../polacode/postJSON.png'
import transmeetCode from '../../polacode/postTransmeet.png'
import * as S from './styles'

const Main = ({
  title = 'CRA Project Starter',
  description = 'A CRA template that includes ESLINT/Prettier, Styled Components and Storybook',
}) => {
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

  const [jsonPlaceholderData, setJsonPlaceholderData] = React.useState({})
  const [jsonPlaceholderError, setJsonPlaceholderError] = React.useState('')
  const [transmeetData, setTransmeetData] = React.useState({})
  const [transmeetError, setTransmeetError] = React.useState('')

  const postJSONPlaceholder = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', payload)
      .then(({ data }) => setJsonPlaceholderData(data))
      .catch((error) => {
        setJsonPlaceholderError(error)
        console.log(error)
      })
  }

  const postTransmeet = () => {
    axios
      .post('https://transmeet.herokuapp.com/user', payload)
      .then(({ data }) => setTransmeetData(data))
      .catch((error) => {
        setTransmeetError(error)
        console.log(error)
      })
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.RequisitionsWrapper>
        <div>
          <h2>Fazer requisição pra API JSON Placeholder</h2>
          <button onClick={() => postJSONPlaceholder()}>Fazer POST</button>
          <div>
            <h3>Código</h3>
            <img
              style={{ display: 'block', maxWidth: '50%' }}
              src={jsonPlaceholderCode}
            />
            <h3>Resposta</h3>
            {!!jsonPlaceholderData && (
              <div>{JSON.stringify(jsonPlaceholderData)}</div>
            )}
            <h3>Erro</h3>
            {!!jsonPlaceholderError && (
              <div>{JSON.stringify(jsonPlaceholderError)}</div>
            )}
          </div>
        </div>
        <div>
          <h2>Fazer requisição pra API Transmeet</h2>
          <button onClick={() => postTransmeet()}>Fazer POST</button>
          <div>
            <h3>Código</h3>
            <img
              style={{ display: 'block', maxWidth: '50%' }}
              src={transmeetCode}
            />
            <h3>Resposta</h3>
            {!!transmeetData && <div>{JSON.stringify(transmeetData)}</div>}
            <h3>Erro</h3>
            {!!transmeetError && <div>{JSON.stringify(transmeetError)}</div>}
          </div>
        </div>
      </S.RequisitionsWrapper>
    </S.Wrapper>
  )
}

export default Main
