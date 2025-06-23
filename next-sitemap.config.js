/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://gymrnk.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/api/*'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://gymrnk.com/sitemap.xml',
      ],
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  }