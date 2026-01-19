<template>
  <div id="contactModal" class="modal" @click="handleOutsideClick">
    <div class="modal-content-form" @click.stop>
      <span class="modal-close" @click="closeModal">&times;</span>
      <h2>{{ $t('contactForm.title') }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">{{ $t('common.name') }} {{ $t('common.required') }}</label>
          <input v-model="form.name" type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="phone">{{ $t('common.phone') }} {{ $t('common.required') }}</label>
          <input v-model="form.phone" type="tel" id="phone" name="phone" required>
        </div>
        <div class="form-group">
          <label for="email">{{ $t('common.email') }}</label>
          <input v-model="form.email" type="email" id="email" name="email">
        </div>
        <div class="form-group">
          <label for="message">{{ $t('common.message') }}</label>
          <textarea v-model="form.message" id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">{{ $t('common.sendRequest') }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const closeModal = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
}

const handleOutsideClick = (e) => {
  if (e.target.id === 'contactModal') {
    closeModal()
  }
}

const { t } = useI18n()

const handleSubmit = () => {
  // Здесь можно добавить отправку на сервер
  console.log('Form submitted:', form)
  alert(t('common.thankYou'))
  
  // Сброс формы
  form.name = ''
  form.phone = ''
  form.email = ''
  form.message = ''
  
  closeModal()
}
</script>

<style scoped>
.modal {
  display: none;
}
</style>
