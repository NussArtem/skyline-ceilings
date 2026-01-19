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
          <div class="type-card">
            <h3><NuxtLink :to="localePath('/quiet-walls')">{{ $t('innovations.quietWallsTitle') }}</NuxtLink></h3>
            <p>{{ $t('innovations.quietWallsDesc') }}</p>
          </div>
          <div class="type-card">
            <h3><NuxtLink :to="localePath('/hidden-hatches')">{{ $t('innovations.hiddenHatchesTitle') }}</NuxtLink></h3>
            <p>{{ $t('innovations.hiddenHatchesDesc') }}</p>
          </div>
          <div class="type-card">
            <h3><NuxtLink :to="localePath('/ventilation')">{{ $t('innovations.ventilationTitle') }}</NuxtLink></h3>
            <p>{{ $t('innovations.ventilationDesc') }}</p>
          </div>
          <div class="type-card">
            <h3><NuxtLink :to="localePath('/hidden-curtains')">{{ $t('innovations.hiddenCurtainsTitle') }}</NuxtLink></h3>
            <p>{{ $t('innovations.hiddenCurtainsDesc') }}</p>
          </div>
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
