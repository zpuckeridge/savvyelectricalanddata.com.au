module.exports = {
  siteMetadata: {
    title: `Savvy Electrical and Data`,
    description: `We strive for complete customer satisfaction! We are here to help you out with renovations, new builds, small domestic jobs, split system airconditioners, security cameras, home automation and much more!`,
    siteUrl: `https://savvyelectricalanddata.com/`,
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.webp",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://savvyelectricalanddata.com.au",
        sitemap: "https://savvyelectricalanddata.com.au/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
