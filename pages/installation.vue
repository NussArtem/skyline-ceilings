<template>
  <div>
    <section class="content-section plane-section">
      <div class="container">
        <div class="plane-split">
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('installation.eyebrow') }}</p>
            <h1>{{ $t('installation.title') }}</h1>
            <p class="lead">{{ $t('installation.lead') }}</p>
            <p>{{ $t('installation.text1') }}</p>
            <p>{{ $t('installation.text2') }}</p>
          </div>
          <figure class="plane-media">
            <img src="/images/installation-1.jpg" :alt="$t('installation.alt')" />
            <figcaption>{{ $t('installation.caption') }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="plane-split plane-split--reverse">
          <figure class="plane-media">
            <img src="/images/hinge-butterfly.jpg" :alt="$t('installation.alt')" />
            <figcaption>{{ $t('installation.stepsCaption') }}</figcaption>
          </figure>
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('installation.stepsEyebrow') }}</p>
            <h2>{{ $t('installation.stepsTitle') }}</h2>
            <ol class="step-list step-list--rich">
              <li>
                <span class="step-list__num">01</span>
                <div class="step-list__body">
                  <strong>{{ $t('installation.step1Title') }}</strong>
                  <span>{{ $t('installation.step1Text') }}</span>
                </div>
              </li>
              <li>
                <span class="step-list__num">02</span>
                <div class="step-list__body">
                  <strong>{{ $t('installation.step2Title') }}</strong>
                  <span>{{ $t('installation.step2Text') }}</span>
                </div>
              </li>
              <li>
                <span class="step-list__num">03</span>
                <div class="step-list__body">
                  <strong>{{ $t('installation.step3Title') }}</strong>
                  <span>{{ $t('installation.step3Text') }}</span>
                </div>
              </li>
              <li>
                <span class="step-list__num">04</span>
                <div class="step-list__body">
                  <strong>{{ $t('installation.step4Title') }}</strong>
                  <span>{{ $t('installation.step4Text') }}</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="plane-split">
          <div class="plane-copy">
            <p class="plane-eyebrow">{{ $t('installation.noteEyebrow') }}</p>
            <h2>{{ $t('installation.noteTitle') }}</h2>
            <ul class="plane-list">
              <li>{{ $t('installation.note1') }}</li>
              <li>{{ $t('installation.note2') }}</li>
              <li>{{ $t('installation.note3') }}</li>
              <li>{{ $t('installation.note4') }}</li>
            </ul>
            <p class="plane-end">{{ $t('installation.end') }}</p>
          </div>
          <figure class="plane-media">
            <img src="/images/installation-2.jpg" :alt="$t('installation.alt')" />
            <figcaption>{{ $t('installation.caption') }}</figcaption>
          </figure>
        </div>

        <div class="plane-gallery">
          <button
            v-for="(img, index) in detailGallery"
            :key="index"
            type="button"
            class="plane-gallery__item"
            @click="openImageModal(img, detailGallery, index)"
          >
            <img :src="img" :alt="`${$t('installation.alt')} ${index + 1}`" />
          </button>
        </div>
      </div>
    </section>

    <section class="content-section section-alt">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner__copy">
            <h2>{{ $t('installation.ctaTitle') }}</h2>
            <p>{{ $t('installation.ctaText') }}</p>
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

useSEO('installation.title', 'installation.lead', '/images/installation-1.jpg');

const detailGallery = [
  '/images/installation-1.jpg',
  '/images/installation-2.jpg',
  '/images/installation-3.jpg',
  '/images/hinge-butterfly.jpg',
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
