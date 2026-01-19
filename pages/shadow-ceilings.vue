<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('shadowCeilings.title') }}</h1>
        </div>

        <div class="content-grid">
          <div class="content-text">
            <p class="lead">
              {{ $t('shadowCeilings.lead') }}
            </p>
            <p>{{ $t('shadowCeilings.text1') }}</p>
            <p>{{ $t('shadowCeilings.text2') }}</p>
            <ul class="feature-list">
              <li>{{ $t('shadowCeilings.feature1') }}</li>
              <li>{{ $t('shadowCeilings.feature2') }}</li>
              <li>{{ $t('shadowCeilings.feature3') }}</li>
            </ul>
          </div>
          <div class="content-images">
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="img"
              :alt="$t('shadowCeilings.alt')"
              class="gallery-thumb"
            />
          </div>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('shadowCeilings.text3') }}
          </p>
          <p>
            {{ $t('shadowCeilings.text4') }}
          </p>
          <p>
            {{ $t('shadowCeilings.text5') }}
          </p>
        </div>

        <div class="content-text mt-2">
          <p>
            <strong>{{ $t('shadowCeilings.whereTitle') }}</strong>
          </p>
          <ul class="feature-list">
            <li>{{ $t('shadowCeilings.where1') }}</li>
            <li>{{ $t('shadowCeilings.where2') }}</li>
            <li>{{ $t('shadowCeilings.where3') }}</li>
            <li>{{ $t('shadowCeilings.where4') }}</li>
          </ul>
          <p class="mt-2">
            {{ $t('shadowCeilings.end') }}
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
useSEO('shadowCeilings.title', 'shadowCeilings.lead', '/images/shadow-ceiling-1.jpg');

const images = [
  '/images/shadow-ceiling-1.jpg',
  '/images/shadow-ceiling-2.jpg',
  '/images/shadow-ceiling-3.jpg',
];

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
