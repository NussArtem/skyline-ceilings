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
  // Уничтожаем старые наблюдатели перед инициализацией новых
  destroy();
  
  // Небольшая задержка для того, чтобы DOM полностью загрузился
  setTimeout(() => {
    init();
  }, 150);
};

onMounted(() => {
  initializeAnimations();
});

// Переинициализируем анимации при изменении маршрута
watch(
  () => route.path,
  async () => {
    await nextTick();
    initializeAnimations();
  }
);

onBeforeUnmount(() => {
  destroy();
});
</script>
