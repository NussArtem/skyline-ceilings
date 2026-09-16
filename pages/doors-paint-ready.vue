<template>
  <div>
    <section class="content-section plane-section">
      <div class="container">
        <div class="plane-split">
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('doorsPaintReady.eyebrow') }}</p>
            <h1>{{ $t('doorsPaintReady.title') }}</h1>
            <p class="lead">{{ $t('doorsPaintReady.lead') }}</p>
            <p>{{ $t('doorsPaintReady.text1') }}</p>
            <ul class="plane-list">
              <li>{{ $t('doorsPaintReady.feature1') }}</li>
              <li>{{ $t('doorsPaintReady.feature2') }}</li>
              <li>{{ $t('doorsPaintReady.feature3') }}</li>
              <li>{{ $t('doorsPaintReady.feature4') }}</li>
            </ul>
          </div>
          <figure class="plane-media">
            <img src="/images/idoors-pl01-white.jpg" :alt="$t('doorsPaintReady.alt')" />
            <figcaption>{{ $t('doorsPaintReady.caption') }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="plane-split plane-split--reverse">
          <figure class="plane-media">
            <img src="/images/doors-paint-2.jpg" :alt="$t('doorsPaintReady.alt')" />
            <figcaption>{{ $t('doorsPaintReady.whereCaption') }}</figcaption>
          </figure>
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('doorsPaintReady.whereEyebrow') }}</p>
            <h2>{{ $t('doorsPaintReady.whereTitle') }}</h2>
            <p class="lead">{{ $t('doorsPaintReady.text2') }}</p>
            <p>{{ $t('doorsPaintReady.text3') }}</p>
            <ul class="plane-list">
              <li>{{ $t('doorsPaintReady.where1') }}</li>
              <li>{{ $t('doorsPaintReady.where2') }}</li>
              <li>{{ $t('doorsPaintReady.where3') }}</li>
            </ul>
            <p class="plane-end">{{ $t('doorsPaintReady.end') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="section-header section-header--plane">
          <p class="plane-eyebrow">{{ $t('doorsPaintReady.specsEyebrow') }}</p>
          <h2>{{ $t('doorsPaintReady.specsTitle') }}</h2>
          <p class="section-lead">{{ $t('doorsPaintReady.specsLead') }}</p>
        </div>
        <div class="plane-gallery">
          <button
            v-for="(img, index) in gallery"
            :key="index"
            type="button"
            class="plane-gallery__item"
            @click="openImageModal(img, gallery, index)"
          >
            <img :src="img" :alt="`${$t('doorsPaintReady.alt')} ${index + 1}`" />
          </button>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner__copy">
            <h2>{{ $t('doorsPaintReady.ctaTitle') }}</h2>
            <p>{{ $t('doorsPaintReady.ctaText') }}</p>
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

useSEO('doorsPaintReady.title', 'doorsPaintReady.lead', '/images/idoors-pl01-white.jpg');

const gallery = [
  '/images/doors-paint-1.jpg',
  '/images/idoors-pl01-white.jpg',
  '/images/idoors-pl01-light-grey.jpg',
  '/images/doors-paint-3.jpg',
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
