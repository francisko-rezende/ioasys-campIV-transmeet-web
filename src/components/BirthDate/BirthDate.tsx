import React from 'react'

import * as S from './BirthDate.style'

const BirthDate = () => {
  const subtractYearsFromPresentDate = (yearsToSubtract: number) => {
    const today = new Date()
    today.setFullYear(today.getFullYear() - yearsToSubtract)

    const getTwoDigitMonth = (month: number) =>
      month < 10 ? `0${month}` : month

    const resultingDate = new Date(today)
    const resultingDateYear = resultingDate.getFullYear()
    const resultingDateMonth = getTwoDigitMonth(resultingDate.getMonth() + 1)
    const resultingDateDay = resultingDate.getDate()

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
