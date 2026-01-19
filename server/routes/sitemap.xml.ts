export default defineEventHandler((event) => {
  const baseUrl = 'https://skylineceilings.com'
  
  const routes = [
    '',
    '/about',
    '/prices',
    '/gallery',
    '/shadow-ceilings',
    '/floating-ceilings',
    '/multi-level-ceilings',
    '/printed-ceilings',
    '/lighting-solutions',
    '/linear-lighting',
    '/track-lighting',
    '/spotlights',
    '/chandeliers',
    '/innovations',
    '/quiet-walls',
    '/hidden-hatches',
    '/ventilation',
    '/hidden-curtains',
    // Мультиязычные версии
    '/en',
    '/en/about',
    '/en/prices',
    '/en/gallery',
    '/es',
    '/es/about',
    '/es/prices',
    '/es/gallery',
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`
  
  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})
