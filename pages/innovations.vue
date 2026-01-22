<template>
  <div>
    <section class="hero-banner">
      <div class="banner-image">
        <img src="/images/innovations-hero.jpg" :alt="$t('innovations.heroAlt')">
        <div class="banner-overlay">
          <div class="banner-text">
            <h1>{{ $t('innovations.heroTitle') }}</h1>
            <p>{{ $t('innovations.heroSubtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('innovations.title') }}</h1>
        </div>
        
        <div class="content-text">
          <p class="lead">
            {{ $t('innovations.lead') }}
          </p>
          <p>
            {{ $t('innovations.text1') }}
          </p>
        </div>

        <div class="types-grid mt-2">
          <NuxtLink :to="localePath('/quiet-walls')" class="type-card">
            <h3>{{ $t('innovations.quietWallsTitle') }}</h3>
            <p>{{ $t('innovations.quietWallsDesc') }}</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/hidden-hatches')" class="type-card">
            <h3>{{ $t('innovations.hiddenHatchesTitle') }}</h3>
            <p>{{ $t('innovations.hiddenHatchesDesc') }}</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/ventilation')" class="type-card">
            <h3>{{ $t('innovations.ventilationTitle') }}</h3>
            <p>{{ $t('innovations.ventilationDesc') }}</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/hidden-curtains')" class="type-card">
            <h3>{{ $t('innovations.hiddenCurtainsTitle') }}</h3>
            <p>{{ $t('innovations.hiddenCurtainsDesc') }}</p>
          </NuxtLink>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('innovations.text2') }}
          </p>
          <p>
            {{ $t('innovations.text3') }}
          </p>
        </div>

        <div class="cta-section">
          <button class="btn btn-primary" @click="openContactForm">{{ $t('common.callMeasurer') }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO'

const { t } = useI18n()
const localePath = useLocalePath()

// SEO мета-теги
useSEO('innovations.title', 'innovations.lead', '/images/innovations-hero.jpg')

const openContactForm = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}
</script>
