export default defineEventHandler((event) => {
  const baseUrl = 'https://skylineceilings.com'

  const paths = [
    '',
    '/about',
    '/gallery',
    '/installation',
    '/doors-paint-ready',
    '/doors-finished',
    '/doors-glass',
  ]

  const locales = ['', '/en', '/ru']

  const routes = locales.flatMap((localePrefix) =>
    paths.map((path) => `${localePrefix}${path}` || '/')
  )

  // Default locale (es) has no prefix; avoid duplicate bare "/"
  const uniqueRoutes = [...new Set(routes.map((r) => (r === '' ? '/' : r)))]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${uniqueRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route === '/' ? '' : route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' || route === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})
