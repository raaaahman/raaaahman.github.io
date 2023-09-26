const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProduction ? '/personal-homepage' : undefined,
  images: {
    unoptimized: true,
  },
}