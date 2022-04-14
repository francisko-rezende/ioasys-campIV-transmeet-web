import styled from 'styled-components'

export const Background = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100vh;

  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

export const FormContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: center;
  background: white;
  /* padding-right: 100px; */
  /* width: 50%;
  height: 100vh; */
`
export const OnboardingContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  background: linear-gradient(360deg, #185aa1 0%, #bb4981 100%);
  /* width: 50%;
  height: 100vh; */
`

export const OnboardingWrapper = styled.div`
  max-width: 600px;
  max-height: 822px;
  /* margin-left: 110px; */
`

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1170px;
  margin: 0 auto;
  background-color: red;
  position: absolute;
`
