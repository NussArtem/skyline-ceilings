<template>
  <div>
    <section class="content-section plane-section">
      <div class="container">
        <div class="plane-split">
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('doorsGlass.eyebrow') }}</p>
            <h1>{{ $t('doorsGlass.title') }}</h1>
            <p class="lead">{{ $t('doorsGlass.lead') }}</p>
            <p>{{ $t('doorsGlass.text1') }}</p>
            <ul class="plane-list">
              <li>{{ $t('doorsGlass.feature1') }}</li>
              <li>{{ $t('doorsGlass.feature2') }}</li>
              <li>{{ $t('doorsGlass.feature3') }}</li>
              <li>{{ $t('doorsGlass.feature4') }}</li>
            </ul>
          </div>
          <figure class="plane-media">
            <img src="/images/catalog-glass-1.jpg" :alt="$t('doorsGlass.alt')" />
            <figcaption>{{ $t('doorsGlass.caption') }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="plane-split plane-split--reverse">
          <figure class="plane-media">
            <img src="/images/catalog-glass-3.jpg" :alt="$t('doorsGlass.alt')" />
            <figcaption>{{ $t('doorsGlass.whereCaption') }}</figcaption>
          </figure>
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('doorsGlass.whereEyebrow') }}</p>
            <h2>{{ $t('doorsGlass.whereTitle') }}</h2>
            <p class="lead">{{ $t('doorsGlass.text2') }}</p>
            <p>{{ $t('doorsGlass.text3') }}</p>
            <ul class="plane-list">
              <li>{{ $t('doorsGlass.where1') }}</li>
              <li>{{ $t('doorsGlass.where2') }}</li>
              <li>{{ $t('doorsGlass.where3') }}</li>
            </ul>
            <p class="plane-end">{{ $t('doorsGlass.end') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="section-header section-header--plane">
          <p class="plane-eyebrow">{{ $t('doorsGlass.specsEyebrow') }}</p>
          <h2>{{ $t('doorsGlass.specsTitle') }}</h2>
          <p class="section-lead">{{ $t('doorsGlass.specsLead') }}</p>
        </div>
        <div class="plane-gallery">
          <button
            v-for="(img, index) in gallery"
            :key="index"
            type="button"
            class="plane-gallery__item"
            @click="openImageModal(img, gallery, index)"
          >
            <img :src="img" :alt="`${$t('doorsGlass.alt')} ${index + 1}`" />
          </button>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner__copy">
            <h2>{{ $t('doorsGlass.ctaTitle') }}</h2>
            <p>{{ $t('doorsGlass.ctaText') }}</p>
          </div>
          <button class="btn btn-primary" @click="openContactForm">
            {{ $t('common.contactUs') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO';

useSEO('doorsGlass.title', 'doorsGlass.lead', '/images/catalog-glass-1.jpg');

const gallery = [
  '/images/catalog-glass-2.jpg',
  '/images/doors-glass-1.jpg',
  '/images/idoors-pl03-oak.jpg',
  '/images/idoors-pl04-mirror.jpg',
  '/images/idoors-pl03-mirror.jpg',
];

const { openModal } = useImageModal();
const openImageModal = (src, allImages, index) => openModal(src, allImages, index);

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
