<template>
  <div>
    <section class="content-section printed-ceilings">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('printedCeilings.title') }}</h1>
        </div>

        <!-- Центральный текст -->
        <div class="content-text text-center">
          <p class="lead">
            {{ $t('printedCeilings.lead') }}
          </p>
          <p>
            {{ $t('printedCeilings.text1') }}
          </p>
          <p>
            {{ $t('printedCeilings.text2') }}
          </p>
          <p>{{ $t('printedCeilings.text3') }}</p>
        </div>

        <!-- Первый блок: слева список, справа картинка -->
        <div class="content-grid mt-2">
          <div class="content-text">
            <h3>{{ $t('printedCeilings.looksTitle') }}</h3>
            <p>
              <strong>{{ $t('printedCeilings.canBeTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('printedCeilings.canBe1') }}</li>
              <li>{{ $t('printedCeilings.canBe2') }}</li>
              <li>{{ $t('printedCeilings.canBe3') }}</li>
              <li>{{ $t('printedCeilings.canBe4') }}</li>
            </ul>
            <p class="mt-2">{{ $t('printedCeilings.looksNote') }}</p>
          </div>
          <div class="content-images">
            <img
              :src="images[0]"
              :alt="$t('printedCeilings.alt')"
              class="gallery-thumb"
            />
          </div>
        </div>

        <!-- Второй блок: слева картинка, справа список -->
        <div class="content-grid image-left mt-2">
          <div class="content-images">
            <img
              :src="images[1]"
              :alt="$t('printedCeilings.alt')"
              class="gallery-thumb"
            />
          </div>
          <div class="content-text">
            <h3>{{ $t('printedCeilings.techTitle') }}</h3>
            <p>{{ $t('printedCeilings.techText') }}</p>
            <ul class="feature-list">
              <li>{{ $t('printedCeilings.tech1') }}</li>
              <li>{{ $t('printedCeilings.tech2') }}</li>
              <li>{{ $t('printedCeilings.tech3') }}</li>
              <li>{{ $t('printedCeilings.tech4') }}</li>
            </ul>
            <p class="mt-2">{{ $t('printedCeilings.techNote') }}</p>
          </div>
        </div>

        <!-- Третий блок: слева список, справа картинка -->
        <div class="content-grid mt-2">
          <div class="content-text">
            <h3>{{ $t('printedCeilings.whereTitle') }}</h3>
            <p>
              <strong>{{ $t('printedCeilings.whereUsedTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('printedCeilings.whereUsed1') }}</li>
              <li>{{ $t('printedCeilings.whereUsed2') }}</li>
              <li>{{ $t('printedCeilings.whereUsed3') }}</li>
              <li>{{ $t('printedCeilings.whereUsed4') }}</li>
              <li>{{ $t('printedCeilings.whereUsed5') }}</li>
            </ul>
            <p class="mt-2">
              {{ $t('printedCeilings.whereEnd') }}
            </p>
          </div>
          <div class="content-images">
            <img
              :src="images[2]"
              :alt="$t('printedCeilings.alt')"
              class="gallery-thumb"
            />
          </div>
        </div>

        <div class="cta-section">
          <button class="btn btn-primary" @click="openContactForm">
            {{ $t('common.callMeasurer') }}
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
useSEO('printedCeilings.title', 'printedCeilings.lead', '/images/printed-1.jpg');

const images = ['/images/printed-1.jpg', '/images/printed-2.jpg', '/images/printed-3.jpg'];

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
