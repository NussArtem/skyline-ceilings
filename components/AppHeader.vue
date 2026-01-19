<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-top-content">
          <div class="header-left">
            <div class="working-hours">{{ $t('header.workingHours') }}</div>
            <a href="tel:+34662484848" class="phone">{{ $t('header.phone') }}</a>
          </div>
          <div class="logo">
            <NuxtLink :to="localePath('/')" @click="handleLogoClick">SkyLine Ceilings</NuxtLink>
          </div>
          <div class="header-right">
            <div class="language-switcher">
              <button
                v-for="loc in availableLocales"
                :key="loc.code"
                type="button"
                class="lang-btn"
                :class="{ active: locale === loc.code }"
                @click="handleLanguageSwitch(loc.code)"
              >
                {{ loc.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="main-nav">
      <div class="container">
        <ul class="nav-menu">
          <li class="nav-item dropdown">
            <NuxtLink :to="localePath('/')">{{ $t('nav.tissueCeilings') }}</NuxtLink>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink :to="localePath('/shadow-ceilings')">{{ $t('nav.shadow') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/floating-ceilings')">{{ $t('nav.floating') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/multi-level-ceilings')">{{
                  $t('nav.multiLevel')
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/printed-ceilings')">{{ $t('nav.printed') }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink :to="localePath('/lighting-solutions')">{{
              $t('nav.lightingSolutions')
            }}</NuxtLink>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink :to="localePath('/linear-lighting')">{{
                  $t('nav.linearLighting')
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/track-lighting')">{{
                  $t('nav.trackLighting')
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/spotlights')">{{ $t('nav.spotlights') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/chandeliers')">{{ $t('nav.chandeliers') }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink :to="localePath('/gallery')">{{ $t('nav.gallery') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :to="localePath('/prices')">{{ $t('nav.prices') }}</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink :to="localePath('/innovations')">{{ $t('nav.innovations') }}</NuxtLink>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink :to="localePath('/quiet-walls')">{{ $t('nav.quietWalls') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/hidden-hatches')">{{
                  $t('nav.hiddenHatches')
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/ventilation')">{{ $t('nav.ventilation') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/hidden-curtains')">{{
                  $t('nav.hiddenCurtains')
                }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const router = useRouter();

const availableLocales = computed(() => {
  return locales.value;
});

const handleLogoClick = (event) => {
  // Убеждаемся, что навигация происходит немедленно
  const homePath = localePath('/');
  if (router.currentRoute.value.path !== homePath) {
    router.push(homePath);
  }
};

const handleLanguageSwitch = async (localeCode) => {
  // Предотвращаем повторное переключение на тот же язык
  if (locale.value === localeCode) {
    return;
  }

  try {
    // Получаем текущий путь
    const currentRoute = router.currentRoute.value;
    const currentPath = currentRoute.path;
    
    // Устанавливаем новый язык
    await setLocale(localeCode);
    
    // Получаем путь для нового языка
    const newPath = switchLocalePath(localeCode);
    
    // Если switchLocalePath вернул путь, используем его
    if (newPath && newPath !== currentPath) {
      await router.push(newPath);
    } else {
      // Иначе формируем путь вручную
      let targetPath = currentPath;
      const defaultLocale = 'es'; // defaultLocale из nuxt.config.ts
      
      // Убираем префикс текущего языка, если есть (кроме defaultLocale)
      const currentLocalePrefix = `/${locale.value}`;
      if (targetPath.startsWith(currentLocalePrefix) && locale.value !== defaultLocale) {
        targetPath = targetPath.replace(currentLocalePrefix, '') || '/';
      }
      
      // Если текущий путь начинается с префикса другого языка, убираем его
      for (const loc of locales.value) {
        if (loc.code !== defaultLocale && targetPath.startsWith(`/${loc.code}/`)) {
          targetPath = targetPath.replace(`/${loc.code}`, '') || '/';
          break;
        }
      }
      
      // Добавляем префикс нового языка, если это не defaultLocale
      if (localeCode !== defaultLocale) {
        targetPath = `/${localeCode}${targetPath}`;
      }
      
      await router.push(targetPath);
    }
  } catch (error) {
    console.error('Error switching language:', error);
  }
};
</script>
