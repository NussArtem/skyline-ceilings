<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('floatingCeilings.title') }}</h1>
        </div>

        <div class="content-grid">
          <div class="content-text">
            <p class="lead">
              {{ $t('floatingCeilings.lead') }}
            </p>
            <p>
              {{ $t('floatingCeilings.text1') }}
            </p>
            <p>{{ $t('floatingCeilings.text2') }}</p>
            <p>
              <strong>{{ $t('floatingCeilings.importantTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('floatingCeilings.important1') }}</li>
              <li>{{ $t('floatingCeilings.important2') }}</li>
              <li>{{ $t('floatingCeilings.important3') }}</li>
            </ul>
          </div>
          <div class="content-images">
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="img"
              :alt="$t('floatingCeilings.alt')"
              class="gallery-thumb"
            />
          </div>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('floatingCeilings.text3') }}
          </p>
          <p>
            {{ $t('floatingCeilings.text4') }}
          </p>
        </div>

        <div class="content-text mt-2">
          <p>
            <strong>{{ $t('floatingCeilings.makesTitle') }}</strong>
          </p>
          <ul class="feature-list">
            <li>{{ $t('floatingCeilings.makes1') }}</li>
            <li>{{ $t('floatingCeilings.makes2') }}</li>
            <li>{{ $t('floatingCeilings.makes3') }}</li>
          </ul>
          <p class="mt-2">
            {{ $t('floatingCeilings.end') }}
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
useSEO('floatingCeilings.title', 'floatingCeilings.lead', '/images/floating-ceiling-1.jpg');

const images = [
  '/images/floating-ceiling-1.jpg',
  '/images/floating-ceiling-2.jpg',
  '/images/floating-ceiling-3.jpg',
];

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
