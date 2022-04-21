import React from 'react'

import Spinner from '../../assets/icons/loader-01.webp'
import * as S from './Loading.style'

export type LoadingProps = {
  isLoading?: boolean
}

const Loading = ({ isLoading = true }: LoadingProps) => {
  return <S.Image src={Spinner} alt="Cachorro" isLoading={isLoading} />
}

export default Loading
