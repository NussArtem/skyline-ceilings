<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('quietWalls.title') }}</h1>
        </div>
        
        <div class="content-text">
          <p class="lead">
            {{ $t('quietWalls.lead') }}
          </p>
          <p>
            {{ $t('quietWalls.text1') }}
          </p>
          <ul class="feature-list">
            <li>{{ $t('quietWalls.feature1') }}</li>
            <li>{{ $t('quietWalls.feature2') }}</li>
            <li>{{ $t('quietWalls.feature3') }}</li>
          </ul>
        </div>

        <div class="content-text mt-2">
          <h3>{{ $t('quietWalls.techTitle') }}</h3>
          <p><strong>{{ $t('quietWalls.techDesc') }}</strong></p>
          <ol class="feature-list">
            <li><strong>{{ $t('quietWalls.frameTitle') }}</strong>
              <ul>
                <li>{{ $t('quietWalls.frame1') }}</li>
                <li>{{ $t('quietWalls.frame2') }}</li>
                <li>{{ $t('quietWalls.frame3') }}</li>
                <li>{{ $t('quietWalls.frame4') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('quietWalls.acousticTitle') }}</strong>
              <ul>
                <li>{{ $t('quietWalls.acoustic1') }}</li>
                <li>{{ $t('quietWalls.acoustic2') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('quietWalls.tissueTitle') }}</strong>
              <ul>
                <li>{{ $t('quietWalls.tissue1') }}</li>
                <li>{{ $t('quietWalls.tissue2') }}</li>
                <li>{{ $t('quietWalls.tissue3') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('quietWalls.soundTitle') }}</strong>
              <ul>
                <li>{{ $t('quietWalls.sound1') }}</li>
                <li>{{ $t('quietWalls.sound2') }}</li>
              </ul>
            </li>
            <li><strong>{{ $t('quietWalls.mountTitle') }}</strong>
              <ul>
                <li>{{ $t('quietWalls.mount1') }}</li>
                <li>{{ $t('quietWalls.mount2') }}</li>
                <li>{{ $t('quietWalls.mount3') }}</li>
              </ul>
            </li>
          </ol>
        </div>

        <div class="content-text mt-2">
          <h3>{{ $t('quietWalls.benefitsTitle') }}</h3>
          <ul class="feature-list">
            <li>{{ $t('quietWalls.benefit1') }}</li>
            <li>{{ $t('quietWalls.benefit2') }}</li>
            <li>{{ $t('quietWalls.benefit3') }}</li>
            <li>{{ $t('quietWalls.benefit4') }}</li>
            <li>{{ $t('quietWalls.benefit5') }}</li>
            <li>{{ $t('quietWalls.benefit6') }}</li>
            <li>{{ $t('quietWalls.benefit7') }}</li>
          </ul>
        </div>

        <div class="content-text mt-2">
          <p>
            {{ $t('quietWalls.text2') }}
          </p>
          <p>
            {{ $t('quietWalls.price') }}
          </p>
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
useSEO('quietWalls.title', 'quietWalls.lead', '/images/hero-ceiling.jpg')

const openContactForm = () => {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }
}
</script>
