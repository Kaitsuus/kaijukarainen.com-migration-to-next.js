/** @type {import('next').NextConfig} */
require('dotenv').config();

const dynamicRoutes = JSON.parse(process.env.dynamicRoutes || '[]');

const config = {
  generateStaticParams: async () => {
    const paths = {
      '/': { page: '/' },
      '/dev': { page: '/dev' },
      '/privacy': { page: '/privacy' },
      '/wordpressverkkosivut': { page: '/wordpressverkkosivut' },
    };

    dynamicRoutes.forEach((route) => {
      paths[route.page] = {
        page: route.page,
        query: route.query,
      };
    });

    return paths;
  },
};

module.exports = config;
