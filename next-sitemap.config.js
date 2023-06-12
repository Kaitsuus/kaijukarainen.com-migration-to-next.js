const SITE_URL = process.env.SITE_URL || 'https://kaijukarainen.com';

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
};

export default config;
