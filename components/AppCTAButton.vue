<template>
  <div class="cta-button">
    <button class="btn-cta" @click="openContactForm">
      {{ $t('common.callMeasurer') }}
    </button>
  </div>
</template>

<script setup>
const openContactForm = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}
</script>
