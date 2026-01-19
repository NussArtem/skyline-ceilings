<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('chandeliers.title') }}</h1>
        </div>

        <div class="content-grid">
          <div class="content-text">
            <p class="lead">
              {{ $t('chandeliers.lead') }}
            </p>
            <p>
              <strong>{{ $t('chandeliers.meansTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('chandeliers.means1') }}</li>
              <li>{{ $t('chandeliers.means2') }}</li>
              <li>{{ $t('chandeliers.means3') }}</li>
            </ul>
          </div>
          <div class="content-images">
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="img"
              :alt="$t('chandeliers.alt')"
              class="gallery-thumb"
            />
          </div>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('chandeliers.text1') }}
          </p>
          <p>
            {{ $t('chandeliers.text2') }}
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
useSEO('chandeliers.title', 'chandeliers.lead', '/images/chandeliers-1.jpg')

const images = [
  '/images/chandeliers-1.jpg',
  '/images/chandeliers-2.jpg',
  '/images/chandeliers-3.jpg'
]

const openContactForm = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}
</script>
