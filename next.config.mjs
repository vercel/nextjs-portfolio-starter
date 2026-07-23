import nextra from 'nextra'

const withNextraConfig = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js'
})

export default withNextraConfig({
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
})