/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: 'portfolio',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-postcss',
    'gatsby-plugin-mdx', {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    }],
};
