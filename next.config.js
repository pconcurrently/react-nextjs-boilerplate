module.exports = {
  i18n: {
    locales: ['en-US', 'vi-VN'],
    defaultLocale: 'en-US',
    localeDetection: false,
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
