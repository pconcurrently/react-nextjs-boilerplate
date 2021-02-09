/* eslint-disable react/prop-types */
import React, { useReducer } from 'react'

import { useRouter } from 'next/router'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import { IntlProvider } from 'react-intl'
import { AppContext } from 'state/appContext'
import { appReducer } from 'state/appReducer'
import { initialState } from 'state/initialState'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/globalStyle'
import en from 'translations/en.json'
import vi from 'translations/vi.json'

const messages = {
  'en-US': en,
  'vi-VN': vi,
}

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function HHGDiscover({ Component, pageProps, err }) {
  const { locale, defaultLocale } = useRouter()

  const { isMobileSsr } = pageProps
  const enhancedState = { ...initialState, isMobileSsr }
  const [state, dispatch] = useReducer(appReducer, enhancedState)

  return (
    <IntlProvider
      locale={locale || defaultLocale}
      messages={messages[locale]}
      defaultLocale="en-US"
    >
      <AppContext.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={{}}>
          <GlobalStyle />
          <Component {...pageProps} err={err} />
        </ThemeProvider>
      </AppContext.Provider>
    </IntlProvider>
  )
}
