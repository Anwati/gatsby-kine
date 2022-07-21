import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gabrielle Doorenbos Kinésithérapeute`,
    siteUrl: `https://gabi-kine.com`,
    description: `Gabrielle Doorenbos Kinésithérapeute physiotherapy Etterbeek Bruxelles Kiné générale, Kiné du sport, Douleur persistante, Chaines Physiologiques, prise de rendez-vous en ligne`,
    image: `/gatsby-icon.png`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/favicon.png',
    },
  },
]
};

export default config;
