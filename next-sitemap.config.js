// next-sitemap.config.js
const siteUrl = process.env.SITE_URL || 'https://kaijukarainen.com';
const dynamicRoutes = process.env.dynamicRoutes || [
  { page: '/', query: {} },
  { page: '/dev', query: {} },
  { page: '/privacy', query: {} },
  { page: '/wordpressverkkosivut', query: {} },
];

const config = {
  siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
  // Include the dynamic routes in the sitemap
  dynamicSitemap: {
    // Pass the dynamic routes from next.config.js
    routes: dynamicRoutes,
  },
};

module.exports = config;
