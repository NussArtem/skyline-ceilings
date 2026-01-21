<template>
  <header class="header" :class="{ 'o-header': true, '-active': isMobileMenuOpen }">
    <div class="header-top">
      <div class="container">
        <div class="header-top-content o-header__content">
          <div class="header-left o-header__left">
            <div class="logo">
              <NuxtLink :to="localePath('/')" @click="handleLogoClick">SkyLine Ceilings</NuxtLink>
            </div>
            <div class="working-hours">{{ $t('header.workingHours') }}</div>
            <a href="tel:+34662484848" class="phone">{{ $t('header.phone') }}</a>
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
        <button 
          class="mobile-menu-toggle m-headerBtn" 
          :class="{ '-active': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          data-header="burger"
          aria-label="Toggle menu"
        >
          <span class="a-burger">
            <span class="a-burger__default"></span>
            <span class="a-burger__close a-cross"></span>
          </span>
        </button>
        <div class="mobile-menu o-menu" :class="{ '-active': isMobileMenuOpen }" data-module-menu="menu">
          <div class="mobile-menu__background o-menu__background"></div>
          <div class="mobile-menu__container o-menu__container">
            <div class="o-menu__row row">
              <div class="mobile-menu__content o-menu__content">
                <ul class="mobile-menu__list o-menu__list" :class="{ '-skew': isMobileMenuOpen }">
                  <li class="nav-item">
                    <NuxtLink :to="localePath('/')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                      <span class="a-buttonField__text a-buttonText">{{ $t('nav.tissueCeilings') }}</span>
                    </NuxtLink>
                    <ul class="dropdown-menu" v-show="isDropdownOpen[0]">
                      <li>
                        <NuxtLink :to="localePath('/shadow-ceilings')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.shadow') }}</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink :to="localePath('/floating-ceilings')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.floating') }}</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink :to="localePath('/multi-level-ceilings')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.multiLevel') }}</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink :to="localePath('/printed-ceilings')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.printed') }}</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown" :class="{ 'active': isDropdownOpen[1] }">
                    <NuxtLink :to="localePath('/lighting-solutions')" @click.prevent="toggleDropdown(1)" class="-menu a-button a-buttonField" data-menu="button">
                      <span class="a-buttonField__text a-buttonText">{{ $t('nav.lightingSolutions') }}</span>
                    </NuxtLink>
                    <ul class="dropdown-menu" v-show="isDropdownOpen[1]">
                      <li>
                        <NuxtLink :to="localePath('/linear-lighting')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.linearLighting') }}</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink :to="localePath('/track-lighting')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.trackLighting') }}</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink :to="localePath('/spotlights')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.spotlights') }}</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink :to="localePath('/chandeliers')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.chandeliers') }}</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <NuxtLink :to="localePath('/gallery')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                      <span class="a-buttonField__text a-buttonText">{{ $t('nav.gallery') }}</span>
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink :to="localePath('/prices')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                      <span class="a-buttonField__text a-buttonText">{{ $t('nav.prices') }}</span>
                    </NuxtLink>
                  </li>
                  <li class="nav-item dropdown" :class="{ 'active': isDropdownOpen[2] }">
                    <NuxtLink :to="localePath('/innovations')" @click.prevent="toggleDropdown(2)" class="-menu a-button a-buttonField" data-menu="button">
                      <span class="a-buttonField__text a-buttonText">{{ $t('nav.innovations') }}</span>
                    </NuxtLink>
                    <ul class="dropdown-menu" v-show="isDropdownOpen[2]">
                      <li>
                        <NuxtLink :to="localePath('/quiet-walls')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.quietWalls') }}</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink :to="localePath('/hidden-hatches')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.hiddenHatches') }}</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink :to="localePath('/ventilation')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.ventilation') }}</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink :to="localePath('/hidden-curtains')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                          <span class="a-buttonField__text a-buttonText">{{ $t('nav.hiddenCurtains') }}</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <NuxtLink :to="localePath('/about')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                      <span class="a-buttonField__text a-buttonText">{{ $t('nav.about') }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const router = useRouter();

const isMobileMenuOpen = ref(false);
const isDropdownOpen = ref({});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
    // Добавляем класс для анимации пунктов меню
    setTimeout(() => {
      const navItems = document.querySelectorAll('.o-menu__list .nav-item');
      navItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.08}s`;
        item.classList.add('animate-in');
      });
    }, 100);
  } else {
    document.body.style.overflow = '';
    // Удаляем классы анимации
    const navItems = document.querySelectorAll('.o-menu__list .nav-item');
    navItems.forEach((item) => {
      item.classList.remove('animate-in');
    });
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
    // Удаляем классы анимации
    const navItems = document.querySelectorAll('.o-menu__list .nav-item');
    navItems.forEach((item) => {
      item.classList.remove('animate-in');
    });
};

// Закрываем меню при клике на ссылку
const handleLinkClick = () => {
  if (window.innerWidth <= 768) {
    closeMobileMenu();
  }
};

// Обработка dropdown в мобильном меню
const toggleDropdown = (index) => {
  if (window.innerWidth <= 768) {
    isDropdownOpen.value[index] = !isDropdownOpen.value[index];
    // Добавляем/удаляем класс active для стилизации
    const dropdownItems = document.querySelectorAll('.o-menu__list .nav-item.dropdown');
    if (dropdownItems[index]) {
      if (isDropdownOpen.value[index]) {
        dropdownItems[index].classList.add('active');
      } else {
        dropdownItems[index].classList.remove('active');
      }
    }
  }
};

// Закрываем меню при изменении размера окна
const handleResize = () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  document.body.style.overflow = '';
});

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
