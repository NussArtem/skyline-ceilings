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
            class="gallery-item"
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

<style scoped>
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: calc(var(--spacing-unit) * 1.5);
  padding: calc(var(--spacing-unit) * 3) 0;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  cursor: pointer;
  transition: opacity 0.15s ease;
  border: 1px solid var(--color-border);
}

.gallery-item:hover {
  opacity: 0.9;
}

.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}
</style>
