<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('spotlights.title') }}</h1>
        </div>

        <div class="content-grid">
          <div class="content-text">
            <p class="lead">
              {{ $t('spotlights.lead') }}
            </p>
            <p>
              <strong>{{ $t('spotlights.systemTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('spotlights.system1') }}</li>
              <li>{{ $t('spotlights.system2') }}</li>
              <li>{{ $t('spotlights.system3') }}</li>
            </ul>
            <p class="mt-2">
              <strong>{{ $t('spotlights.usedForTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('spotlights.usedFor1') }}</li>
              <li>{{ $t('spotlights.usedFor2') }}</li>
              <li>{{ $t('spotlights.usedFor3') }}</li>
            </ul>
          </div>
          <div class="content-images">
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="img"
              :alt="$t('spotlights.alt')"
              class="gallery-thumb"
            />
          </div>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('spotlights.text1') }}
          </p>
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
import { useSEO } from '~/composables/useSEO'

const { t } = useI18n()

// SEO мета-теги
useSEO('spotlights.title', 'spotlights.lead', '/images/spotlights-1.jpg')

const images = [
  '/images/spotlights-1.jpg',
  '/images/spotlights-2.jpg',
  '/images/spotlights-3.jpg'
]

const openContactForm = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}
</script>
