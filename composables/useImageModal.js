export const useImageModal = () => {
  const openModal = (src, allImages = [], index = 0) => {
    if (process.client) {
      const event = new CustomEvent('openImageModal', {
        detail: { src, allImages, index }
      })
      window.dispatchEvent(event)
    }
  }

  return {
    openModal
  }
}
