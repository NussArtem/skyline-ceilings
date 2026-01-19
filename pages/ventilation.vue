<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('ventilation.title') }}</h1>
        </div>
        
        <div class="content-text">
          <p class="lead">
            {{ $t('ventilation.lead') }}
          </p>
          <p>
            {{ $t('ventilation.text1') }}
          </p>
        </div>

        <div class="content-text mt-2">
          <h3>{{ $t('ventilation.techTitle') }}</h3>
          <p>
            {{ $t('ventilation.techText') }}
          </p>
          <ol class="feature-list">
            <li><strong>{{ $t('ventilation.profilesTitle') }}</strong>
              <ul>
                <li>{{ $t('ventilation.profiles1') }}</li>
                <li>{{ $t('ventilation.profiles2') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('ventilation.functionsTitle') }}</strong>
              <ul>
                <li>{{ $t('ventilation.functions1') }}</li>
                <li>{{ $t('ventilation.functions2') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('ventilation.mountTitle') }}</strong>
              <ul>
                <li>{{ $t('ventilation.mount1') }}</li>
                <li>{{ $t('ventilation.mount2') }}</li>
              </ul>
            </li>
          </ol>
        </div>

        <div class="content-text mt-2">
          <h3>{{ $t('ventilation.benefitsTitle') }}</h3>
          <ul class="feature-list">
            <li>{{ $t('ventilation.benefit1') }}</li>
            <li>{{ $t('ventilation.benefit2') }}</li>
            <li>{{ $t('ventilation.benefit3') }}</li>
            <li>{{ $t('ventilation.benefit4') }}</li>
            <li>{{ $t('ventilation.benefit5') }}</li>
          </ul>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('ventilation.text2') }}
          </p>
          <p>{{ $t('ventilation.price') }}</p>
        </div>

        <div class="cta-section">
          <button class="btn btn-primary" @click="openContactForm">{{ $t('common.callMeasurer') }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO'

const { t } = useI18n()

// SEO мета-теги
useSEO('ventilation.title', 'ventilation.lead', '/images/hero-ceiling.jpg')

const openContactForm = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}
</script>
