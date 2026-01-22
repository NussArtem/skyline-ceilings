<template>
  <button class="scroll-top-button" type="button" aria-label="Scroll to top" @click="scrollToTop">
    <span class="scroll-top-icon" aria-hidden="true"></span>
  </button>
</template>

<script setup>
const scrollToTop = () => {
  if (typeof window === 'undefined') return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
