module.exports = {
  siteMetadata: {
    title: "Dean Haleem",
    description: "Personal Website",
    siteUrl: "https://deanhaleem.com",
    author: "deanhaleem",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-material-design-for-bootstrap`,
        short_name: `MDB starter`,
        start_url: `/`,
        background_color: `#4B5EB8`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
