import { userInfo } from 'os'

import React from 'react'

import { User } from '../TransRegistrationForm/TransRegistrationForm'
import * as S from './BirthDate.style'

type BirthDateProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BirthDate = ({ value, onChange }: BirthDateProps) => {
  const subtractYearsFromPresentDate = (yearsToSubtract: number): string => {
    // todo refactor this so it uses the lib Roberto suggested
    const today = new Date()
    today.setFullYear(today.getFullYear() - yearsToSubtract)

    const getTwoDigitNumber = (number: number): string =>
      number < 10 ? `0${number}` : String(number)

    const resultingDate = new Date(today)
    const resultingDateYear = resultingDate.getFullYear()
    const resultingDateMonth = getTwoDigitNumber(resultingDate.getMonth() + 1)
    const resultingDateDay = getTwoDigitNumber(resultingDate.getDate())

    return [resultingDateYear, resultingDateMonth, resultingDateDay].join('-')
  }

  const todayMinus100years = subtractYearsFromPresentDate(100)
  const todayMinus18years = subtractYearsFromPresentDate(18)

  return (
    <S.Wrapper>
      <S.Label htmlFor="birthDate">Data de Nascimento</S.Label>
      <S.Input
        type="date"
        name="birthDate"
        min={todayMinus100years}
        max={todayMinus18years}
        onChange={onChange}
        value={value}
      />
    </S.Wrapper>
  )
}

export default BirthDate
