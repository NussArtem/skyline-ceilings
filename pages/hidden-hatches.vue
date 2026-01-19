<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('hiddenHatches.title') }}</h1>
        </div>
        
        <div class="content-text">
          <p class="lead">
            {{ $t('hiddenHatches.lead') }}
          </p>
          <p>
            {{ $t('hiddenHatches.text1') }}
          </p>
        </div>

        <div class="content-text mt-2">
          <h3>{{ $t('hiddenHatches.techTitle') }}</h3>
          <p><strong>{{ $t('hiddenHatches.techDesc') }}</strong></p>
          <ol class="feature-list">
            <li><strong>{{ $t('hiddenHatches.frameTitle') }}</strong>
              <ul>
                <li>{{ $t('hiddenHatches.frame1') }}</li>
                <li>{{ $t('hiddenHatches.frame2') }}</li>
                <li>{{ $t('hiddenHatches.frame3') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('hiddenHatches.faceTitle') }}</strong>
              <ul>
                <li>{{ $t('hiddenHatches.face1') }}</li>
                <li>{{ $t('hiddenHatches.face2') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('hiddenHatches.accessTitle') }}</strong>
              <ul>
                <li>{{ $t('hiddenHatches.access1') }}</li>
                <li>{{ $t('hiddenHatches.access2') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('hiddenHatches.mountTitle') }}</strong>
              <ul>
                <li>{{ $t('hiddenHatches.mount1') }}</li>
                <li>{{ $t('hiddenHatches.mount2') }}</li>
                <li>{{ $t('hiddenHatches.mount3') }}</li>
              </ul>
            </li>
          </ol>
        </div>

        <div class="content-text mt-2">
          <h3>{{ $t('hiddenHatches.benefitsTitle') }}</h3>
          <ul class="feature-list">
            <li>{{ $t('hiddenHatches.benefit1') }}</li>
            <li>{{ $t('hiddenHatches.benefit2') }}</li>
            <li>{{ $t('hiddenHatches.benefit3') }}</li>
            <li>{{ $t('hiddenHatches.benefit4') }}</li>
            <li>{{ $t('hiddenHatches.benefit5') }}</li>
            <li>{{ $t('hiddenHatches.benefit6') }}</li>
          </ul>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('hiddenHatches.text2') }}
          </p>
          <p>{{ $t('hiddenHatches.price') }}</p>
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
useSEO('hiddenHatches.title', 'hiddenHatches.lead', '/images/hero-ceiling.jpg')

const openContactForm = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}
</script>
