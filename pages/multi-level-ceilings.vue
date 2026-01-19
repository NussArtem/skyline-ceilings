<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('multiLevelCeilings.title') }}</h1>
        </div>

        <div class="content-grid">
          <div class="content-text">
            <p class="lead">
              {{ $t('multiLevelCeilings.lead') }}
            </p>
            <p>
              {{ $t('multiLevelCeilings.text1') }}
            </p>
            <p>
              <strong>{{ $t('multiLevelCeilings.allowsTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('multiLevelCeilings.allows1') }}</li>
              <li>{{ $t('multiLevelCeilings.allows2') }}</li>
              <li>{{ $t('multiLevelCeilings.allows3') }}</li>
            </ul>
          </div>
          <div class="content-images">
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="img"
              :alt="$t('multiLevelCeilings.alt')"
              class="gallery-thumb"
            />
          </div>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('multiLevelCeilings.text2') }}
          </p>
          <ul class="feature-list">
            <li>{{ $t('multiLevelCeilings.create1') }}</li>
            <li>{{ $t('multiLevelCeilings.create2') }}</li>
            <li>{{ $t('multiLevelCeilings.create3') }}</li>
          </ul>
          <p class="mt-2">
            <strong>{{ $t('multiLevelCeilings.effectiveTitle') }}</strong>
          </p>
          <ul class="feature-list">
            <li>{{ $t('multiLevelCeilings.effective1') }}</li>
            <li>{{ $t('multiLevelCeilings.effective2') }}</li>
            <li>{{ $t('multiLevelCeilings.effective3') }}</li>
          </ul>
          <p class="mt-2">
            {{ $t('multiLevelCeilings.end') }}
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
useSEO('multiLevelCeilings.title', 'multiLevelCeilings.lead', '/images/multi-level-1.jpg');

const images = [
  '/images/multi-level-1.jpg',
  '/images/multi-level-2.jpg',
  '/images/multi-level-3.jpg',
];

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
