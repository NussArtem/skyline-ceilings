<template>
  <div>
    <section class="content-section plane-section">
      <div class="container">
        <div class="plane-split">
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('doorsFinished.eyebrow') }}</p>
            <h1>{{ $t('doorsFinished.title') }}</h1>
            <p class="lead">{{ $t('doorsFinished.lead') }}</p>
            <p>{{ $t('doorsFinished.text1') }}</p>
            <ul class="plane-list">
              <li>{{ $t('doorsFinished.feature1') }}</li>
              <li>{{ $t('doorsFinished.feature2') }}</li>
              <li>{{ $t('doorsFinished.feature3') }}</li>
              <li>{{ $t('doorsFinished.feature4') }}</li>
            </ul>
          </div>
          <figure class="plane-media">
            <img src="/images/idoors-pl01-concrete-alu.jpg" :alt="$t('doorsFinished.alt')" />
            <figcaption>{{ $t('doorsFinished.caption') }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="plane-split plane-split--reverse">
          <figure class="plane-media">
            <img src="/images/catalog-finished-extra-3.jpg" :alt="$t('doorsFinished.alt')" />
            <figcaption>{{ $t('doorsFinished.whereCaption') }}</figcaption>
          </figure>
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('doorsFinished.whereEyebrow') }}</p>
            <h2>{{ $t('doorsFinished.whereTitle') }}</h2>
            <p class="lead">{{ $t('doorsFinished.text2') }}</p>
            <p>{{ $t('doorsFinished.text3') }}</p>
            <ul class="plane-list">
              <li>{{ $t('doorsFinished.where1') }}</li>
              <li>{{ $t('doorsFinished.where2') }}</li>
              <li>{{ $t('doorsFinished.where3') }}</li>
            </ul>
            <p class="plane-end">{{ $t('doorsFinished.end') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="section-header section-header--plane">
          <p class="plane-eyebrow">{{ $t('doorsFinished.specsEyebrow') }}</p>
          <h2>{{ $t('doorsFinished.specsTitle') }}</h2>
          <p class="section-lead">{{ $t('doorsFinished.specsLead') }}</p>
        </div>
        <div class="plane-gallery">
          <button
            v-for="(img, index) in gallery"
            :key="index"
            type="button"
            class="plane-gallery__item"
            @click="openImageModal(img, gallery, index)"
          >
            <img :src="img" :alt="`${$t('doorsFinished.alt')} ${index + 1}`" />
          </button>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner__copy">
            <h2>{{ $t('doorsFinished.ctaTitle') }}</h2>
            <p>{{ $t('doorsFinished.ctaText') }}</p>
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

useSEO('doorsFinished.title', 'doorsFinished.lead', '/images/idoors-pl01-concrete-alu.jpg');

const gallery = [
  '/images/doors-finished-2.jpg',
  '/images/catalog-finished-extra-1.jpg',
  '/images/catalog-finished-extra-2.jpg',
  '/images/idoors-pl02-dark.jpg',
  '/images/idoors-pl01-concrete-alu.jpg',
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
