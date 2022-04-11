import React from 'react'

import * as S from './AcceptTermsCheckbox.style'

export type AcceptTermsCheckboxProps = {
  label: string
}

const AcceptTermsCheckbox = ({ label = 'label' }: AcceptTermsCheckboxProps) => {
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

export default AcceptTermsCheckbox
