<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('trackLighting.title') }}</h1>
        </div>

        <div class="content-grid">
          <div class="content-text">
            <p class="lead">
              {{ $t('trackLighting.lead') }}
            </p>
            <p>
              {{ $t('trackLighting.text1') }}
            </p>
            <p>
              <strong>{{ $t('trackLighting.canMountTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('trackLighting.canMount1') }}</li>
              <li>{{ $t('trackLighting.canMount2') }}</li>
            </ul>
          </div>
          <div class="content-images">
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="img"
              :alt="$t('trackLighting.alt')"
              class="gallery-thumb"
            />
          </div>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('trackLighting.text2') }}
          </p>
          <p>
            {{ $t('trackLighting.text3') }}
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
useSEO('trackLighting.title', 'trackLighting.lead', '/images/track-1.jpg')

const images = [
  '/images/track-1.jpg',
  '/images/track-2.jpg',
  '/images/track-3.jpg'
]

const openContactForm = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}
</script>
