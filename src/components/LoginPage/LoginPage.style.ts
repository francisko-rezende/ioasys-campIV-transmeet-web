import styled from 'styled-components'

export const Background = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100vh;
`

export const FormContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  background: white;
  padding-right: 100px;
`
export const OnboardingContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(360deg, #185aa1 0%, #bb4981 100%);
`

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1170px;
  margin: 0 auto;
  background-color: red;
  position: absolute;
`
