<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('linearLighting.title') }}</h1>
        </div>

        <div class="content-grid">
          <div class="content-text">
            <p class="lead">
              {{ $t('linearLighting.lead') }}
            </p>
            <p>
              {{ $t('linearLighting.text1') }}
            </p>
            <p>
              <strong>{{ $t('linearLighting.allowsTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('linearLighting.allows1') }}</li>
              <li>{{ $t('linearLighting.allows2') }}</li>
              <li>{{ $t('linearLighting.allows3') }}</li>
            </ul>
          </div>
          <div class="content-images">
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="img"
              :alt="$t('linearLighting.alt')"
              class="gallery-thumb"
            />
          </div>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('linearLighting.text2') }}
          </p>
          <p>
            {{ $t('linearLighting.text3') }}
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
import { useSEO } from '~/composables/useSEO';

const { t } = useI18n();

// SEO мета-теги
useSEO('linearLighting.title', 'linearLighting.lead', '/images/linear-1.jpg');

const images = ['/images/linear-1.jpg', '/images/linear-2.jpg', '/images/linear-3.jpg'];

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
