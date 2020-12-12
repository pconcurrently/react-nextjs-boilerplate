module.exports = {
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
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
    domains: ['localhost'],
  },
}
