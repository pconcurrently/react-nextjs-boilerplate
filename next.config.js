module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'vi'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    domains: [
      {
        domain: 'localhost:3000',
        defaultLocale: 'vi',
      },
      {
        domain: 'example.nl',
        defaultLocale: 'nl-NL',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['localhost', 'dev.hhg-care.hellohealthgroup.com'],
  },
}
