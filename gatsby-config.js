module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `foxfarms17924`,
        // access_token: "a valid access token",
        // instagram_id: "3406081890",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
