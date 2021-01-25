const newsletterFeed = require(`./src/utils/newsletterFeed`);

module.exports = (options) => {
  const { feed = true, feedTitle = `Blog by Boro` } = options;

  return {
    siteMetadata: {
      siteTitle: `Boro`,
      siteTitleAlt: `Boro | Blog`,
      siteHeadline: `Technical blog on frontend technologies, backend technologies, and development in general.`,
      siteUrl: `https://boro-blogs.netlify.app`,
      siteDescription: `Technical blog on Full-stack technologies, development, and best practices in general.`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `@boro`,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      feed && {
        resolve: `gatsby-plugin-feed`,
        options: newsletterFeed(feedTitle),
      },
      `gatsby-remark-copy-linked-files`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  };
};
