<template>
  <div>
    <section class="hero-banner">
      <div class="banner-image">
        <img src="/images/lighting-hero.jpg" :alt="$t('lightingSolutions.heroAlt')" />
        <div class="banner-overlay">
          <div class="banner-text">
            <h1>{{ $t('lightingSolutions.heroTitle') }}</h1>
            <p>{{ $t('lightingSolutions.heroSubtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-text">
          <p class="lead">
            {{ $t('lightingSolutions.lead') }}
          </p>
          <p>
            {{ $t('lightingSolutions.text1') }}
          </p>
          <p>
            {{ $t('lightingSolutions.text2') }}
          </p>
          <p>
            {{ $t('lightingSolutions.text3') }}
          </p>
          <ul class="feature-list">
            <li>{{ $t('lightingSolutions.feature1') }}</li>
            <li>{{ $t('lightingSolutions.feature2') }}</li>
            <li>{{ $t('lightingSolutions.feature3') }}</li>
          </ul>
          <p class="mt-2">
            {{ $t('lightingSolutions.text4') }}
          </p>
          <p>
            <strong>{{ $t('lightingSolutions.allowsTitle') }}</strong>
          </p>
          <ul class="feature-list">
            <li>{{ $t('lightingSolutions.allows1') }}</li>
            <li>{{ $t('lightingSolutions.allows2') }}</li>
            <li>{{ $t('lightingSolutions.allows3') }}</li>
            <li>{{ $t('lightingSolutions.allows4') }}</li>
          </ul>
          <p class="mt-2">
            {{ $t('lightingSolutions.text5') }}
          </p>
        </div>

        <div class="types-grid mt-2">
          <NuxtLink :to="localePath('/linear-lighting')" class="type-card">
            <h3>{{ $t('lightingSolutions.linearTitle') }}</h3>
            <p>{{ $t('lightingSolutions.linearDesc') }}</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/track-lighting')" class="type-card">
            <h3>{{ $t('lightingSolutions.trackTitle') }}</h3>
            <p>{{ $t('lightingSolutions.trackDesc') }}</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/spotlights')" class="type-card">
            <h3>{{ $t('lightingSolutions.spotlightsTitle') }}</h3>
            <p>{{ $t('lightingSolutions.spotlightsDesc') }}</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/chandeliers')" class="type-card">
            <h3>{{ $t('lightingSolutions.chandeliersTitle') }}</h3>
            <p>{{ $t('lightingSolutions.chandeliersDesc') }}</p>
          </NuxtLink>
        </div>

        <div class="cta-section">
          <button class="btn btn-primary" @click="openContactForm">
            {{ $t('common.callMeasurer') }}
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

// SEO мета-теги
useSEO('lightingSolutions.heroTitle', 'lightingSolutions.lead', '/images/lighting-hero.jpg');

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
