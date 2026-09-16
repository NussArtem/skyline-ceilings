<template>
  <div>
    <!-- Hero -->
    <section class="hero-banner">
      <div class="banner-image">
        <img src="/images/hero-doors.jpg" :alt="$t('home.heroAlt')" id="hero-img" />
        <div class="banner-overlay">
          <div class="container">
            <div class="banner-text">
              <p class="hero-eyebrow">{{ $t('home.heroEyebrow') }}</p>
              <h1>{{ $t('home.heroTitle') }}</h1>
              <p>{{ $t('home.heroSubtitle') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy: text + one plane image -->
    <section class="content-section plane-section" key="about">
      <div class="container">
        <div class="plane-split">
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('home.planeEyebrow') }}</p>
            <h2>{{ $t('home.planeTitle') }}</h2>
            <p class="lead">{{ $t('home.aboutLead') }}</p>
            <ul class="plane-list">
              <li>{{ $t('home.aboutFeature1') }}</li>
              <li>{{ $t('home.aboutFeature2') }}</li>
              <li>{{ $t('home.aboutFeature3') }}</li>
              <li>{{ $t('home.aboutFeature4') }}</li>
            </ul>
          </div>
          <figure class="plane-media">
            <img src="/images/doors-1.jpg" :alt="$t('home.aboutAlt')" />
            <figcaption>{{ $t('home.planeCaption') }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- How it works: numbered steps -->
    <section class="content-section section-alt" key="how">
      <div class="container">
        <div class="plane-split plane-split--reverse">
          <figure class="plane-media">
            <img src="/images/factory-2.jpg" :alt="$t('home.howTitle')" />
            <figcaption>{{ $t('home.howCaption') }}</figcaption>
          </figure>
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('home.howEyebrow') }}</p>
            <h2>{{ $t('home.howTitle') }}</h2>
            <p class="lead">{{ $t('home.howLead') }}</p>
            <ol class="step-list">
              <li>
                <span class="step-list__num">01</span>
                <span class="step-list__text">{{ $t('home.how1') }}</span>
              </li>
              <li>
                <span class="step-list__num">02</span>
                <span class="step-list__text">{{ $t('home.how2') }}</span>
              </li>
              <li>
                <span class="step-list__num">03</span>
                <span class="step-list__text">{{ $t('home.how3') }}</span>
              </li>
              <li>
                <span class="step-list__num">04</span>
                <span class="step-list__text">{{ $t('home.how4') }}</span>
              </li>
            </ol>
            <div class="cta-section cta-section--left">
              <NuxtLink :to="localePath('/installation')" class="btn btn-primary">{{
                $t('nav.installation')
              }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Types with images -->
    <section class="content-section" key="types">
      <div class="container">
        <div class="section-header section-header--plane">
          <p class="plane-eyebrow">{{ $t('home.typesEyebrow') }}</p>
          <h2>{{ $t('home.typesTitle') }}</h2>
          <p class="section-lead">{{ $t('home.typesLead') }}</p>
        </div>
        <div class="systems-grid">
          <NuxtLink
            v-for="type in doorTypes"
            :key="type.slug"
            :to="localePath(`/${type.slug}`)"
            class="system-card"
          >
            <div class="system-card__media">
              <img :src="type.image" :alt="type.title" />
            </div>
            <div class="system-card__body">
              <p class="system-card__label">{{ type.label }}</p>
              <h3>{{ type.title }}</h3>
              <p>{{ type.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="content-section section-alt" key="cta">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner__copy">
            <h2>{{ $t('home.ctaTitle') }}</h2>
            <p>{{ $t('home.ctaText') }}</p>
          </div>
          <button class="btn btn-primary" @click="openContactForm">
            {{ $t('common.contactUs') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO';

const { t } = useI18n();
const localePath = useLocalePath();

useSEO('home.heroTitle', 'home.aboutLead', '/images/hero-doors.jpg');

const doorTypes = computed(() => [
  {
    slug: 'doors-paint-ready',
    label: t('home.typesPaintReadyLabel'),
    title: t('home.typesPaintReady'),
    description: t('home.typesPaintReadyDesc'),
    image: '/images/doors-paint-1.jpg',
  },
  {
    slug: 'doors-finished',
    label: t('home.typesFinishedLabel'),
    title: t('home.typesFinished'),
    description: t('home.typesFinishedDesc'),
    image: '/images/doors-finished-2.jpg',
  },
  {
    slug: 'doors-glass',
    label: t('home.typesGlassLabel'),
    title: t('home.typesGlass'),
    description: t('home.typesGlassDesc'),
    image: '/images/doors-glass-1.jpg',
  },
]);

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
