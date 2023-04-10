module.exports = {
  siteMetadata: {
    title: `Xocolata Pirineus`,
    author: `Xocolata Pirineus`,
    description: `Xocolata Pirineus, chocolatería, pastelería y bombonería de Puigcerdà, fundada por una familia argentina con una extensa tradición chocolatera. Productos 100% artesano y elaborados con las mejores materias primas seleccionadas.`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `carta`,
        short_name: `carta`,
        start_url: `/`,
        background_color: `#f4efea`,
        theme_color: `#201e1b`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
        include_favicon: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-excel`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-166078632-1"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
