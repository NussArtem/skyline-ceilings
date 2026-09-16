<template>
  <div>
    <section class="content-section plane-section">
      <div class="container">
        <div class="plane-split">
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('about.eyebrow') }}</p>
            <h1>{{ $t('about.title') }}</h1>
            <p class="lead">{{ $t('about.welcome') }}</p>
          </div>
          <figure class="plane-media">
            <img src="/images/factory-3.jpg" :alt="$t('about.factoryAlt')" />
            <figcaption>{{ $t('about.missionCaption') }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="plane-split plane-split--reverse">
          <figure class="plane-media">
            <img src="/images/factory-4.jpg" :alt="$t('about.factoryAlt')" />
            <figcaption>{{ $t('about.productionCaption') }}</figcaption>
          </figure>
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('about.missionEyebrow') }}</p>
            <h2>{{ $t('about.missionTitle') }}</h2>
            <p class="lead">{{ $t('about.missionText') }}</p>
            <ul class="plane-list">
              <li>{{ $t('about.mission1') }}</li>
              <li>{{ $t('about.mission2') }}</li>
              <li>{{ $t('about.mission3') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="section-header section-header--plane">
          <p class="plane-eyebrow">{{ $t('about.whyEyebrow') }}</p>
          <h2>{{ $t('about.whyTitle') }}</h2>
        </div>
        <ol class="step-list step-list--wide">
          <li>
            <span class="step-list__num">01</span>
            <div class="step-list__body">
              <strong>{{ $t('about.why1Title') }}</strong>
              <span>{{ $t('about.why1Text') }}</span>
            </div>
          </li>
          <li>
            <span class="step-list__num">02</span>
            <div class="step-list__body">
              <strong>{{ $t('about.why2Title') }}</strong>
              <span>{{ $t('about.why2Text') }}</span>
            </div>
          </li>
          <li>
            <span class="step-list__num">03</span>
            <div class="step-list__body">
              <strong>{{ $t('about.why3Title') }}</strong>
              <span>{{ $t('about.why3Text') }}</span>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="plane-split">
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('about.productionEyebrow') }}</p>
            <h2>{{ $t('about.productionTitle') }}</h2>
            <p class="lead">{{ $t('about.productionText') }}</p>
          </div>
          <figure class="plane-media">
            <img src="/images/factory-5.jpg" :alt="$t('about.factoryAlt')" />
            <figcaption>{{ $t('about.productionCaption') }}</figcaption>
          </figure>
        </div>

        <div class="plane-gallery">
          <button
            v-for="(img, index) in productionGallery"
            :key="index"
            type="button"
            class="plane-gallery__item"
            @click="openImageModal(img, productionGallery, index)"
          >
            <img :src="img" :alt="`${$t('about.factoryAlt')} ${index + 1}`" />
          </button>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="plane-split">
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('about.philosophyEyebrow') }}</p>
            <h2>{{ $t('about.philosophyTitle') }}</h2>
            <p class="lead">{{ $t('about.philosophyText') }}</p>
            <ul class="plane-list">
              <li>{{ $t('about.philosophy1') }}</li>
              <li>{{ $t('about.philosophy2') }}</li>
              <li>{{ $t('about.philosophy3') }}</li>
            </ul>
          </div>
          <figure class="plane-media">
            <img src="/images/doors-2.jpg" :alt="$t('about.factoryAlt')" />
            <figcaption>{{ $t('home.planeCaption') }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner__copy">
            <h2>{{ $t('about.contactTitle') }}</h2>
            <p>{{ $t('about.contactText') }}</p>
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

useSEO('about.title', 'about.welcome', '/images/factory-3.jpg');

const productionGallery = [
  '/images/factory-6.jpg',
  '/images/factory-7.jpg',
  '/images/factory-8.jpg',
  '/images/factory-1.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
];

const { openModal } = useImageModal();

const openImageModal = (src, allImages, index) => {
  openModal(src, allImages, index);
};

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
