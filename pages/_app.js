/* eslint-disable react/prop-types */
import React from 'react'

import { useRouter } from 'next/router'
// eslint-disable-next-line import/order
import { IntlProvider } from 'react-intl'
import '../styles/app.scss'

import en from 'translations/en.json'
import vi from 'translations/vi.json'

const messages = {
  en,
  vi,
}

export default function HHGCare({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter()

  return (
    <IntlProvider
      locale={locale || defaultLocale}
      messages={messages[locale]}
      defaultLocale="en"
    >
      <Component {...pageProps} />
    </IntlProvider>
  )
}
