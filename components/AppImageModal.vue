<template>
  <div id="imageModal" class="modal" @click="closeModal">
    <span class="modal-close" @click="closeModal">&times;</span>
    <img class="modal-content" :src="currentImage" id="modalImage">
    <a class="modal-prev" @click.stop="showPrev">&#10094;</a>
    <a class="modal-next" @click.stop="showNext">&#10095;</a>
  </div>
</template>

<script setup>
const currentImage = ref('')
const images = ref([])
const currentIndex = ref(0)

const openModal = (src, allImages = [], index = 0) => {
  currentImage.value = src
  images.value = allImages.length > 0 ? allImages : [src]
  currentIndex.value = index
  const modal = document.getElementById('imageModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  const modal = document.getElementById('imageModal')
  if (modal) {
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
}

const showPrev = () => {
  if (images.value.length > 0) {
    currentIndex.value = currentIndex.value <= 0 ? images.value.length - 1 : currentIndex.value - 1
    currentImage.value = images.value[currentIndex.value]
  }
}

const showNext = () => {
  if (images.value.length > 0) {
    currentIndex.value = currentIndex.value >= images.value.length - 1 ? 0 : currentIndex.value + 1
    currentImage.value = images.value[currentIndex.value]
  }
}

// Экспортируем функции для использования в других компонентах
defineExpose({
  openModal,
  closeModal
})

// Слушаем события для открытия модального окна
onMounted(() => {
  if (process.client) {
    window.addEventListener('openImageModal', handleOpenModal)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('openImageModal', handleOpenModal)
  }
})

const handleOpenModal = (event) => {
  const { src, allImages, index } = event.detail
  openModal(src, allImages, index)
}

// Обработка клавиатуры
onMounted(() => {
  const handleKeyDown = (e) => {
    const modal = document.getElementById('imageModal')
    if (modal && modal.style.display === 'block') {
      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowLeft') {
        showPrev()
      } else if (e.key === 'ArrowRight') {
        showNext()
      }
    }
  }
  document.addEventListener('keydown', handleKeyDown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown)
  })
})
</script>

<style scoped>
.modal {
  display: none;
}
</style>
