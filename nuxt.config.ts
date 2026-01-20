// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 8000,
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/i18n'],
  vue: {
    compilerOptions: {
      isCustomElement: () => false,
    },
  },
  vite: {
    assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg'],
  },
  // @ts-expect-error - i18n module adds this option
  i18n: {
    locales: [
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'ES' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'EN' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'RU' },
    ],
    lazy: false,
    langDir: 'locales',
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false,
    },
    vueI18n: './i18n.config.ts',
  },
  app: {
    head: {
      title: 'SkyLine Ceilings - Тканевые потолки Descor и HEYtex',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Премиальные тканевые потолки Descor и HEYtex. Современные решения для интерьера: теневые, парящие, многоуровневые потолки, световые решения.',
        },
        {
          name: 'keywords',
          content: 'тканевые потолки, Descor, HEYtex, натяжные потолки, потолки Испания',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'SkyLine Ceilings' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [{ rel: 'canonical', href: 'https://skylineceilings.com' }],
    },
  },
});
