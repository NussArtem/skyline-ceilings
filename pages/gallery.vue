<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('gallery.title') }}</h1>
        </div>

        <div class="content-text">
          <p class="lead">{{ $t('gallery.lead') }}</p>
        </div>

        <div class="gallery-container">
          <div
            v-for="(img, index) in galleryImages"
            :key="index"
            class="content-images gallery-card"
            @click="openImageModal(img, galleryImages, index)"
          >
            <img :src="img" :alt="`${$t('gallery.workAlt')} ${index + 1}`" class="gallery-thumb" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO';

const { t } = useI18n();

// SEO мета-теги
useSEO('gallery.title', 'gallery.lead', '/images/gallery-1.jpg');
const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
];

const { openModal } = useImageModal();

const openImageModal = (src, allImages, index) => {
  openModal(src, allImages, index);
};
</script>

