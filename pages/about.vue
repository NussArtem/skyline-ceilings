<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('about.title') }}</h1>
        </div>

        <div class="content-text">
          <p class="lead">
            {{ $t('about.welcome') }}
          </p>
        </div>

        <div class="content-text mt-2">
          <h2>{{ $t('about.missionTitle') }}</h2>
          <p>{{ $t('about.missionText') }}</p>
          <ul class="feature-list">
            <li>{{ $t('about.mission1') }}</li>
            <li>{{ $t('about.mission2') }}</li>
            <li>{{ $t('about.mission3') }}</li>
          </ul>
        </div>

        <div class="content-text mt-2">
          <h2>{{ $t('about.whyTitle') }}</h2>
          <ol class="feature-list">
            <li>
              <strong>{{ $t('about.why1Title') }}</strong>
              <ul>
                <li>{{ $t('about.why1a') }}</li>
                <li>{{ $t('about.why1b') }}</li>
                <li>{{ $t('about.why1c') }}</li>
              </ul>
            </li>
            <li>
              <strong>{{ $t('about.why2Title') }}</strong>
              <ul>
                <li>{{ $t('about.why2a') }}</li>
                <li>{{ $t('about.why2b') }}</li>
                <li>{{ $t('about.why2c') }}</li>
              </ul>
            </li>
            <li>
              <strong>{{ $t('about.why3Title') }}</strong>
              <ul>
                <li>{{ $t('about.why3a') }}</li>
                <li>{{ $t('about.why3b') }}</li>
                <li>{{ $t('about.why3c') }}</li>
              </ul>
            </li>
            <li>
              <strong>{{ $t('about.why4Title') }}</strong>
              <ul>
                <li>{{ $t('about.why4a') }}</li>
                <li>{{ $t('about.why4b') }}</li>
                <li>{{ $t('about.why4c') }}</li>
              </ul>
            </li>
            <li>
              <strong>{{ $t('about.why5Title') }}</strong>
              <ul>
                <li>{{ $t('about.why5a') }}</li>
                <li>{{ $t('about.why5b') }}</li>
                <li>{{ $t('about.why5c') }}</li>
              </ul>
            </li>
          </ol>
        </div>

        <div class="content-text mt-2">
          <h2>{{ $t('about.philosophyTitle') }}</h2>
          <p>
            {{ $t('about.philosophyText') }}
          </p>
          <ul class="feature-list">
            <li>{{ $t('about.philosophy1') }}</li>
            <li>{{ $t('about.philosophy2') }}</li>
            <li>{{ $t('about.philosophy3') }}</li>
          </ul>
          <p class="mt-2">
            {{ $t('about.philosophyEnd') }}
          </p>
        </div>

        <div class="content-text mt-2">
          <h2>{{ $t('about.partnersTitle') }}</h2>
          <p>{{ $t('about.partnersText') }}</p>
          <ul class="feature-list">
            <li>Pongs</li>
            <li>HEYtex</li>
            <li>Good Hub Systems</li>
            <li>Llebel</li>
            <li>Rich Technology</li>
          </ul>
          <p class="mt-2">
            {{ $t('about.partnersEnd') }}
          </p>
        </div>

        <div class="content-text mt-2">
          <h2>{{ $t('about.contactTitle') }}</h2>
          <p>
            {{ $t('about.contactText') }}
          </p>
          <p class="mt-2">
            {{ $t('about.contactEnd') }}
          </p>
        </div>

        <div class="cta-section">
          <button class="btn btn-primary" @click="openContactForm">
            {{ $t('common.contactUs') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO';

const { t } = useI18n();

// SEO мета-теги
useSEO('about.title', 'about.welcome', '/images/hero-ceiling.jpg');

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
