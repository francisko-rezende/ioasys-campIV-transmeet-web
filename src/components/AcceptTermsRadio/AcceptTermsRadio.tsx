import React from 'react'

import * as S from './AcceptTermsRadio.style'

export type AcceptTermsRadioProps = {
  label: string
}

const AcceptTermsRadio = ({ label = 'label' }: AcceptTermsRadioProps) => {
  const [acceptTerms, setAcceptTerms] = React.useState(false)
  return (
    <S.Wrapper>
      <input
        type="checkbox"
        checked={acceptTerms}
        onChange={() => setAcceptTerms((acceptTerms) => !acceptTerms)}
        id="termos"
        // onClick={() => setAcceptTerms((acceptTerms) => !acceptTerms)}
      />
      <S.Label htmlFor="termos">{label}</S.Label>
    </S.Wrapper>
  )
}

export default AcceptTermsRadio
