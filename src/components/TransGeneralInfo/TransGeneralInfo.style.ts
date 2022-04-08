import styled from 'styled-components'

export const Form = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 53px;
  /* display: grid;
  grid-template-rows: repeat(3, 56px);
  gap: 20px; */
`

export const PhoneLineWrapper = styled.div`
  display: grid;
  grid-template-columns: auto minmax(auto, 307px);
  gap: 28px;
`
export const LocationLineWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 272px) minmax(auto, 170px);
  gap: 28px;
`

export const GenderLineWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
`
