/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Doug - Coding Blog',
  author: 'Douglas Nebongo',
  name: 'Douglas Nebongo',
  headerTitle: 'Doug M.N',
  description:
    'A space where I document my programming journey, sharing lessons, insights, and resources for fellow developers.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dougn.dev',
  siteRepo: 'https://bit.ly/4jSDndu',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'mnebongo@gmail.com',
  github: 'http://bit.ly/3EishOZ',
  x: 'https://bit.ly/3Cpu30j',
  linkedin: 'http://bit.ly/4doSGIz',
  locale: 'en-US',
  stickyNav: true,
}

module.exports = siteMetadata
