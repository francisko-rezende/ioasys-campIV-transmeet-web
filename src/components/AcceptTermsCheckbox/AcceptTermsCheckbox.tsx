import React from 'react'

import * as S from './AcceptTermsCheckbox.style'

export type AcceptTermsCheckboxProps = {
  label: string
  agreesWithTerms: boolean
  setAgreesWithTerms: React.Dispatch<React.SetStateAction<boolean>>
}

const AcceptTermsCheckbox = ({
  label = 'label',
  agreesWithTerms,
  setAgreesWithTerms,
}: AcceptTermsCheckboxProps) => {
  return (
    <S.Wrapper>
      <input
        type="checkbox"
        checked={agreesWithTerms}
        onChange={() =>
          setAgreesWithTerms((agreesWithTerms) => !agreesWithTerms)
        }
        id="termos"
      />
      <S.Label htmlFor="termos">
        {label}
        {<strong>concordo com os termos</strong>}
      </S.Label>
    </S.Wrapper>
  )
}

export default AcceptTermsCheckbox
