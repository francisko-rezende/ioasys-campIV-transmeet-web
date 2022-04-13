import React from 'react'

import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import LoginPage from './components/LoginPage'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LoginPage />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
