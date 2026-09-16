<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
    <AppContactModal />
    <AppImageModal />
    <AppScrollTopButton />
    <AppCTAButton />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { init, destroy } = useScrollAnimations();

const initializeAnimations = () => {
  destroy();
  setTimeout(() => {
    init();
  }, 150);
};

const onImageError = (event) => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement)) return;
  const src = img.getAttribute('src') || '';
  if (!src.startsWith('/images/')) return;
  const retries = Number(img.dataset.retry || '0');
  if (retries >= 2) return;
  img.dataset.retry = String(retries + 1);
  const clean = src.split('?')[0];
  img.src = `${clean}?v=${Date.now()}`;
};

onMounted(() => {
  initializeAnimations();
  document.addEventListener('error', onImageError, true);
});

watch(
  () => route.path,
  async () => {
    await nextTick();
    initializeAnimations();
  }
);

onBeforeUnmount(() => {
  destroy();
  document.removeEventListener('error', onImageError, true);
});
</script>
