export const useSEO = (titleKey, descriptionKey, imagePath = '/images/hero-doors.jpg') => {
  const { t } = useI18n()
  const route = useRoute()
  
  const baseUrl = 'https://skylineceilings.com'
  const currentUrl = `${baseUrl}${route.path}`
  
  useHead({
    title: () => `${t(titleKey)} | SkyLine`,
    meta: [
      {
        name: 'description',
        content: () => t(descriptionKey),
      },
      {
        property: 'og:title',
        content: () => `${t(titleKey)} | SkyLine`,
      },
      {
        property: 'og:description',
        content: () => t(descriptionKey),
      },
      {
        property: 'og:image',
        content: `${baseUrl}${imagePath}`,
      },
      {
        property: 'og:url',
        content: currentUrl,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: () => `${t(titleKey)} | SkyLine`,
      },
      {
        name: 'twitter:description',
        content: () => t(descriptionKey),
      },
      {
        name: 'twitter:image',
        content: `${baseUrl}${imagePath}`,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: currentUrl,
      },
    ],
  })
}
