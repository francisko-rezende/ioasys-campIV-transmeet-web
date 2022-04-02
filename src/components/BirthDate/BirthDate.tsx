import React from 'react'

import * as S from './BirthDate.style'

const BirthDate = () => {
  const subtractYearsFromPresentDate = (yearsToSubtract: number): string => {
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
      <label htmlFor="birthDate">Data de nascimento:</label>
      <input
        type="date"
        name="birthDate"
        min={todayMinus100years}
        max={todayMinus18years}
      />
    </S.Wrapper>
  )
}

export default BirthDate
