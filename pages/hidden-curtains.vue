<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('hiddenCurtains.title') }}</h1>
        </div>
        
        <div class="content-text">
          <p class="lead">
            {{ $t('hiddenCurtains.lead') }}
          </p>
          <p>
            {{ $t('hiddenCurtains.text1') }}
          </p>
        </div>

        <div class="content-text mt-2">
          <h3>{{ $t('hiddenCurtains.techTitle') }}</h3>
          <p><strong>{{ $t('hiddenCurtains.techDesc') }}</strong></p>
          <ol class="feature-list">
            <li><strong>{{ $t('hiddenCurtains.frameTitle') }}</strong>
              <ul>
                <li>{{ $t('hiddenCurtains.frame1') }}</li>
                <li>{{ $t('hiddenCurtains.frame2') }}</li>
                <li>{{ $t('hiddenCurtains.frame3') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('hiddenCurtains.tissueTitle') }}</strong>
              <ul>
                <li>{{ $t('hiddenCurtains.tissue1') }}</li>
                <li>{{ $t('hiddenCurtains.tissue2') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('hiddenCurtains.curtainsTitle') }}</strong>
              <ul>
                <li>{{ $t('hiddenCurtains.curtains1') }}</li>
                <li>{{ $t('hiddenCurtains.curtains2') }}</li>
                <li>{{ $t('hiddenCurtains.curtains3') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('hiddenCurtains.mountTitle') }}</strong>
              <ul>
                <li>{{ $t('hiddenCurtains.mount1') }}</li>
                <li>{{ $t('hiddenCurtains.mount2') }}</li>
                <li>{{ $t('hiddenCurtains.mount3') }}</li>
              </ul>
            </li>
          </ol>
        </div>

        <div class="content-text mt-2">
          <h3>{{ $t('hiddenCurtains.benefitsTitle') }}</h3>
          <ul class="feature-list">
            <li>{{ $t('hiddenCurtains.benefit1') }}</li>
            <li>{{ $t('hiddenCurtains.benefit2') }}</li>
            <li>{{ $t('hiddenCurtains.benefit3') }}</li>
            <li>{{ $t('hiddenCurtains.benefit4') }}</li>
            <li>{{ $t('hiddenCurtains.benefit5') }}</li>
            <li>{{ $t('hiddenCurtains.benefit6') }}</li>
          </ul>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('hiddenCurtains.text2') }}
          </p>
          <p>{{ $t('hiddenCurtains.price') }}</p>
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
useSEO('hiddenCurtains.title', 'hiddenCurtains.lead', '/images/hero-ceiling.jpg')

const openContactForm = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}
</script>
