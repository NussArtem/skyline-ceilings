<template>
  <header class="header" :class="{ 'o-header': true, '-active': isMobileMenuOpen }">
    <div class="header-top">
      <div class="container">
        <div class="header-top-content o-header__content">
          <div class="header-left o-header__left">
            <div class="working-hours">{{ $t('header.workingHours') }}</div>
            <a href="tel:+34662484848" class="phone">{{ $t('header.phone') }}</a>
          </div>
          <div class="logo">
            <NuxtLink :to="localePath('/')" @click="handleLogoClick" class="logo-link">
              <span class="logo-icon">SL</span>
              <span class="logo-text">SkyLine Ceilings</span>
            </NuxtLink>
          </div>
          <div class="header-right">
            <div class="language-switcher">
              <!-- Desktop: показываем все кнопки -->
              <div class="language-buttons-desktop">
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
              <!-- Mobile/Tablet: выпадающее меню -->
              <div class="language-dropdown language-dropdown-mobile">
                <button
                  type="button"
                  class="lang-btn lang-dropdown-toggle"
                  :class="{ active: true }"
                  @click.stop="toggleLanguageDropdown"
                >
                  {{ locale.toUpperCase() }}
                  <span class="dropdown-arrow" :class="{ '-rotated': isLanguageDropdownOpen }">▼</span>
                </button>
                <div class="language-dropdown-menu" :class="{ '-active': isLanguageDropdownOpen }">
                  <button
                    v-for="loc in availableLocales"
                    :key="loc.code"
                    type="button"
                    class="lang-dropdown-item"
                    :class="{ active: locale === loc.code }"
                    @click="handleLanguageSwitchMobile(loc.code)"
                  >
                    {{ loc.name }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="main-nav">
      <div class="container">
        <!-- Desktop Navigation Menu -->
        <ul class="nav-menu">
          <li class="nav-item dropdown">
            <NuxtLink :to="localePath('/')">{{ $t('nav.tissueCeilings') }}</NuxtLink>
            <ul class="dropdown-menu">
              <li><NuxtLink :to="localePath('/shadow-ceilings')">{{ $t('nav.shadow') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/floating-ceilings')">{{ $t('nav.floating') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/multi-level-ceilings')">{{ $t('nav.multiLevel') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/printed-ceilings')">{{ $t('nav.printed') }}</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink :to="localePath('/lighting-solutions')">{{ $t('nav.lightingSolutions') }}</NuxtLink>
            <ul class="dropdown-menu">
              <li><NuxtLink :to="localePath('/linear-lighting')">{{ $t('nav.linearLighting') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/track-lighting')">{{ $t('nav.trackLighting') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/spotlights')">{{ $t('nav.spotlights') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/chandeliers')">{{ $t('nav.chandeliers') }}</NuxtLink></li>
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
              <li><NuxtLink :to="localePath('/quiet-walls')">{{ $t('nav.quietWalls') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/hidden-hatches')">{{ $t('nav.hiddenHatches') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/ventilation')">{{ $t('nav.ventilation') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/hidden-curtains')">{{ $t('nav.hiddenCurtains') }}</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink>
          </li>
        </ul>
        
        <!-- Mobile Burger Button -->
        <button 
          class="mobile-menu-toggle m-headerBtn" 
          :class="{ '-active': isMobileMenuOpen }"
          @click.stop="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          data-header="burger"
          aria-label="Toggle menu"
        >
          <span class="a-burger">
            <span class="a-burger__default"></span>
            <span class="a-burger__close a-cross"></span>
          </span>
        </button>
        <div class="mobile-menu o-menu" :class="{ '-active': isMobileMenuOpen }" data-module-menu="menu" @click.stop>
          <div class="mobile-menu__background o-menu__background"></div>
          <!-- Кнопка закрытия внутри меню -->
          <button 
            class="mobile-menu__close-btn m-headerBtn" 
            :class="{ '-active': isMobileMenuOpen }"
            @click.stop="closeMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Close menu"
          >
            <span class="a-burger">
              <span class="a-burger__default"></span>
              <span class="a-burger__close a-cross"></span>
            </span>
          </button>
          <div class="mobile-menu__container o-menu__container">
            <div class="o-menu__row row">
              <div class="mobile-menu__content o-menu__content">
                <ul class="mobile-menu__list o-menu__list" :class="{ '-skew': isMobileMenuOpen }">
                  <li class="nav-item dropdown" :class="{ 'active': isDropdownOpen[0], 'animate-in': isMobileMenuOpen }">
                    <div class="dropdown-item-wrapper">
                      <NuxtLink 
                        :to="localePath('/')" 
                        @click="handleLinkClick" 
                        class="-menu a-button a-buttonField dropdown-link" 
                        data-menu="button"
                      >
                        <span class="a-buttonField__text a-buttonText">{{ $t('nav.tissueCeilings') }}</span>
                      </NuxtLink>
                      <button 
                        type="button" 
                        class="dropdown-toggle-btn"
                        @click.stop.prevent="toggleDropdown(0, $event)"
                        :aria-expanded="isDropdownOpen[0]"
                        aria-label="Toggle submenu"
                      >
                        <span class="dropdown-toggle-icon" :class="{ '-active': isDropdownOpen[0] }">▼</span>
                      </button>
                    </div>
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
                  <li class="nav-item dropdown" :class="{ 'active': isDropdownOpen[1], 'animate-in': isMobileMenuOpen }">
                    <div class="dropdown-item-wrapper">
                      <NuxtLink 
                        :to="localePath('/lighting-solutions')" 
                        @click="handleLinkClick" 
                        class="-menu a-button a-buttonField dropdown-link" 
                        data-menu="button"
                      >
                        <span class="a-buttonField__text a-buttonText">{{ $t('nav.lightingSolutions') }}</span>
                      </NuxtLink>
                      <button 
                        type="button" 
                        class="dropdown-toggle-btn"
                        @click.stop.prevent="toggleDropdown(1, $event)"
                        :aria-expanded="isDropdownOpen[1]"
                        aria-label="Toggle submenu"
                      >
                        <span class="dropdown-toggle-icon" :class="{ '-active': isDropdownOpen[1] }">▼</span>
                      </button>
                    </div>
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
                  <li class="nav-item" :class="{ 'animate-in': isMobileMenuOpen }">
                    <NuxtLink :to="localePath('/gallery')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                      <span class="a-buttonField__text a-buttonText">{{ $t('nav.gallery') }}</span>
                    </NuxtLink>
                  </li>
                  <li class="nav-item" :class="{ 'animate-in': isMobileMenuOpen }">
                    <NuxtLink :to="localePath('/prices')" @click="handleLinkClick" class="-menu a-button a-buttonField" data-menu="button">
                      <span class="a-buttonField__text a-buttonText">{{ $t('nav.prices') }}</span>
                    </NuxtLink>
                  </li>
                  <li class="nav-item dropdown" :class="{ 'active': isDropdownOpen[2], 'animate-in': isMobileMenuOpen }">
                    <div class="dropdown-item-wrapper">
                      <NuxtLink 
                        :to="localePath('/innovations')" 
                        @click="handleLinkClick" 
                        class="-menu a-button a-buttonField dropdown-link" 
                        data-menu="button"
                      >
                        <span class="a-buttonField__text a-buttonText">{{ $t('nav.innovations') }}</span>
                      </NuxtLink>
                      <button 
                        type="button" 
                        class="dropdown-toggle-btn"
                        @click.stop.prevent="toggleDropdown(2, $event)"
                        :aria-expanded="isDropdownOpen[2]"
                        aria-label="Toggle submenu"
                      >
                        <span class="dropdown-toggle-icon" :class="{ '-active': isDropdownOpen[2] }">▼</span>
                      </button>
                    </div>
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
                  <li class="nav-item" :class="{ 'animate-in': isMobileMenuOpen }">
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
const isLanguageDropdownOpen = ref(false);

const toggleLanguageDropdown = (event) => {
  event.stopPropagation();
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
};

// Закрываем выпадающее меню языков при клике вне его
const closeLanguageDropdown = (event) => {
  const target = event.target;
  // Не закрываем если клик внутри мобильного меню или выпадающего меню языков
  if (!target.closest('.language-dropdown-mobile') && 
      !target.closest('.mobile-menu') && 
      !target.closest('.o-menu') &&
      !target.closest('.mobile-menu-toggle') &&
      !target.closest('.m-headerBtn')) {
    isLanguageDropdownOpen.value = false;
  }
};

// Убрали закрытие меню при клике вне его - теперь закрывается только через крестик или бургер

// Закрываем выпадающее меню при смене языка
const handleLanguageSwitchMobile = async (localeCode) => {
  isLanguageDropdownOpen.value = false;
  await handleLanguageSwitch(localeCode);
};

const toggleMobileMenu = (event) => {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  
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
const handleLinkClick = (event) => {
  // Не обрабатываем клик, если он был на кнопку dropdown
  if (event && (event.target.closest('.dropdown-toggle-btn') || event.target.closest('.dropdown-toggle-icon'))) {
    return;
  }
  
  // Проверяем, была ли это ссылка в подменю (не родительская)
  const isSubmenuLink = event?.target?.closest('.dropdown-menu .a-button, .dropdown-menu .a-buttonField');
  
  // Если это ссылка в подменю, просто закрываем меню
  if (isSubmenuLink) {
    if (window.innerWidth <= 768) {
      // Закрываем все dropdown перед закрытием меню
      isDropdownOpen.value = {};
      closeMobileMenu();
    }
    return;
  }
  
  // Для родительских ссылок с dropdown - переходим на страницу и закрываем меню
  if (window.innerWidth <= 768) {
    // Закрываем все dropdown перед закрытием меню
    isDropdownOpen.value = {};
    closeMobileMenu();
  }
};

// Обработка dropdown в мобильном меню
const toggleDropdown = (index, event) => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  
  // Переключаем состояние dropdown только для выбранного индекса
  const newState = !isDropdownOpen.value[index];
  
  // Закрываем все остальные dropdown
  Object.keys(isDropdownOpen.value).forEach(key => {
    if (parseInt(key) !== index) {
      isDropdownOpen.value[key] = false;
    }
  });
  
  // Устанавливаем состояние для текущего dropdown
  isDropdownOpen.value[index] = newState;
  
  // Добавляем/удаляем класс active для стилизации
  setTimeout(() => {
    const dropdownItems = document.querySelectorAll('.o-menu__list .nav-item.dropdown');
    dropdownItems.forEach((item, i) => {
      if (i === index) {
        if (newState) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      } else {
        item.classList.remove('active');
      }
    });
  }, 0);
};

// Закрываем меню при изменении размера окна
const handleResize = () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  // Закрываем выпадающее меню языков при клике вне его
  document.addEventListener('click', closeLanguageDropdown);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', closeLanguageDropdown);
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
