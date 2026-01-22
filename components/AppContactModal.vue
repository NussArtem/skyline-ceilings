<template>
  <div id="contactModal" class="modal modal-contact" @click="handleOutsideClick">
    <div class="modal-content-form" @click.stop>
      <span class="modal-close" @click="closeModal">&times;</span>
      <h2>{{ $t('contactForm.title') }}</h2>
      <form ref="formRef" novalidate @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">{{ $t('common.name') }} {{ $t('common.required') }}</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            name="name"
            :placeholder="$t('common.name')"
            autocomplete="name"
            minlength="2"
            maxlength="60"
            pattern="^[A-Za-zА-Яа-яЁё\\s'-]+$"
            @input="handleNameInput"
            @blur="validateNameField"
            required
          >
          <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
        </div>
        <div class="form-group">
          <label for="phone">{{ $t('common.phone') }} {{ $t('common.required') }}</label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            name="phone"
            :placeholder="$t('common.phone')"
            autocomplete="tel"
            inputmode="tel"
            maxlength="16"
            @input="handlePhoneInput"
            @blur="validatePhoneField"
            required
          >
          <p v-if="errors.phone" class="form-error">{{ errors.phone }}</p>
        </div>
        <div class="form-group">
          <label for="email">{{ $t('common.email') }}</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            name="email"
            :placeholder="$t('common.email')"
            autocomplete="email"
            maxlength="80"
            @input="handleEmailInput"
            @blur="validateEmailField"
          >
          <p v-if="errors.email" class="form-error" v-html="errors.email"></p>
        </div>
        <div class="form-group">
          <label for="message">{{ $t('common.message') }}</label>
          <textarea
            v-model="form.message"
            id="message"
            name="message"
            rows="4"
            :placeholder="$t('common.message')"
            minlength="5"
            maxlength="500"
            @input="handleTextInput"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">{{ $t('common.sendRequest') }}</button>
        <p v-if="showSuccess" class="form-success">{{ $t('common.requestSent') }}</p>
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

const formRef = ref(null)
const showSuccess = ref(false)
const errors = reactive({
  name: '',
  phone: '',
  email: ''
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

const validateNameField = () => {
  const raw = form.name.trim()
  const valid = /^[A-Za-zА-Яа-яЁё\s'-]{2,60}$/.test(raw)
  errors.name = valid ? '' : t('validation.nameFormat')
  return valid
}

const validatePhoneField = () => {
  const raw = form.phone.trim()
  const normalized = raw.replace(/[()\-\s]/g, '')
  const valid = /^\+?[0-9]{7,15}$/.test(normalized)
  errors.phone = valid ? '' : t('validation.phoneFormat')
  return valid
}

const validateEmailField = () => {
  const raw = form.email.trim()
  if (!raw) {
    errors.email = ''
    return true
  }
  const valid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(raw)
  errors.email = valid ? '' : t('validation.emailFormat')
  return valid
}

const handlePhoneInput = () => {
  showSuccess.value = false
  if (errors.phone) {
    validatePhoneField()
  }
}

const handleNameInput = () => {
  showSuccess.value = false
  if (errors.name) {
    validateNameField()
  }
}

const handleEmailInput = () => {
  showSuccess.value = false
  if (errors.email) {
    validateEmailField()
  }
}

const handleSubmit = (event) => {
  const nameValid = validateNameField()
  const phoneValid = validatePhoneField()
  const emailValid = validateEmailField()
  if (!nameValid || !phoneValid || !emailValid) {
    return
  }
  // Здесь можно добавить отправку на сервер
  console.log('Form submitted:', form)
  showSuccess.value = true
  
  // Сброс формы
  form.name = ''
  form.phone = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.modal {
  display: none;
}
</style>
