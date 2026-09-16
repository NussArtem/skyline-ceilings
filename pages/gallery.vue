<template>
  <div>
    <section class="content-section plane-section">
      <div class="container">
        <div class="section-header section-header--plane">
          <p class="plane-eyebrow">{{ $t('gallery.eyebrow') }}</p>
          <h1>{{ $t('gallery.title') }}</h1>
          <p class="section-lead">{{ $t('gallery.lead') }}</p>
        </div>

        <ClientOnly>
          <AppMasonry
            :items="masonryItems"
            ease="power3.out"
            :duration="0.4"
            :stagger="0.03"
            :scale-on-hover="true"
            :hover-scale="0.95"
            :blur-to-focus="false"
            :color-shift-on-hover="false"
            @select="onSelect"
          />
          <template #fallback>
            <div class="masonry-fallback" aria-hidden="true" />
          </template>
        </ClientOnly>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO';

useSEO('gallery.title', 'gallery.lead', '/images/factory-3.jpg');

const galleryImages = [
  '/images/factory-1.jpg',
  '/images/factory-2.jpg',
  '/images/factory-3.jpg',
  '/images/factory-4.jpg',
  '/images/factory-5.jpg',
  '/images/factory-6.jpg',
  '/images/factory-7.jpg',
  '/images/factory-8.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/idoors-pl01-white.jpg',
  '/images/idoors-pl01-light-grey.jpg',
  '/images/idoors-pl01-concrete-alu.jpg',
  '/images/catalog-finished-extra-1.jpg',
  '/images/catalog-finished-extra-2.jpg',
  '/images/catalog-finished-extra-3.jpg',
  '/images/catalog-glass-1.jpg',
  '/images/catalog-glass-2.jpg',
  '/images/catalog-glass-3.jpg',
  '/images/doors-1.jpg',
  '/images/doors-2.jpg',
  '/images/doors-3.jpg',
  '/images/doors-paint-1.jpg',
  '/images/doors-finished-2.jpg',
  '/images/doors-glass-1.jpg',
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/hinge-butterfly.jpg',
  '/images/installation-1.jpg',
  '/images/installation-2.jpg',
];

// Relative masonry heights (source uses height/2 for display)
const heightBySrc = {
  '/images/factory-1.jpg': 800,
  '/images/factory-2.jpg': 450,
  '/images/factory-3.jpg': 800,
  '/images/factory-4.jpg': 800,
  '/images/factory-5.jpg': 800,
  '/images/factory-6.jpg': 450,
  '/images/factory-7.jpg': 450,
  '/images/factory-8.jpg': 450,
  '/images/gallery-1.jpg': 300,
  '/images/gallery-2.jpg': 900,
  '/images/gallery-3.jpg': 900,
  '/images/gallery-4.jpg': 800,
  '/images/gallery-5.jpg': 800,
  '/images/gallery-6.jpg': 450,
  '/images/idoors-pl01-white.jpg': 760,
  '/images/idoors-pl01-light-grey.jpg': 760,
  '/images/idoors-pl01-concrete-alu.jpg': 760,
  '/images/catalog-finished-extra-1.jpg': 900,
  '/images/catalog-finished-extra-2.jpg': 600,
  '/images/catalog-finished-extra-3.jpg': 960,
  '/images/catalog-glass-1.jpg': 900,
  '/images/catalog-glass-2.jpg': 900,
  '/images/catalog-glass-3.jpg': 900,
  '/images/doors-1.jpg': 900,
  '/images/doors-2.jpg': 900,
  '/images/doors-3.jpg': 900,
  '/images/doors-paint-1.jpg': 900,
  '/images/doors-finished-2.jpg': 900,
  '/images/doors-glass-1.jpg': 900,
  '/images/hinge-butterfly.jpg': 600,
  '/images/installation-1.jpg': 600,
  '/images/installation-2.jpg': 760,
};

const masonryItems = computed(() =>
  galleryImages.map((img, index) => ({
    id: String(index + 1),
    img,
    url: img,
    height: heightBySrc[img] || 600,
  }))
);

const { openModal } = useImageModal();

const onSelect = (item) => {
  const index = galleryImages.indexOf(item.img);
  openModal(item.img, galleryImages, index >= 0 ? index : 0);
};
</script>

<style scoped>
.masonry-fallback {
  min-height: 60vh;
}
</style>
