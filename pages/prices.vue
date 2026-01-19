<template>
  <div>
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h1>{{ $t('prices.title') }}</h1>
        </div>

        <div class="content-text">
          <p class="lead">
            {{ $t('prices.lead') }}
          </p>
        </div>

        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('prices.element') }}</th>
                <th>{{ $t('prices.price') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in priceList" :key="item.element">
                <td>{{ item.element }}</td>
                <td>
                  <strong>{{ item.price }}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="content-text mt-2">
          <h3>{{ $t('prices.notesTitle') }}</h3>
          <ul class="feature-list">
            <li>{{ $t('prices.note1') }}</li>
            <li>{{ $t('prices.note2') }}</li>
            <li>{{ $t('prices.note3') }}</li>
          </ul>
        </div>

        <div class="cta-section">
          <p class="lead">{{ $t('prices.ctaText') }}</p>
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

const { t, locale } = useI18n();

// SEO мета-теги
useSEO('prices.title', 'prices.lead', '/images/hero-ceiling.jpg');

const priceList = computed(() => {
  locale.value;
  return [
    { element: t('prices.items.base'), price: t('prices.priceValues.base') },
    { element: t('prices.items.corner'), price: t('prices.priceValues.corner') },
    { element: t('prices.items.spotlight'), price: t('prices.priceValues.spotlight') },
    { element: t('prices.items.ceramic'), price: t('prices.priceValues.ceramic') },
    { element: t('prices.items.lightLine'), price: t('prices.priceValues.lightLine') },
    { element: t('prices.items.track'), price: t('prices.priceValues.track') },
    { element: t('prices.items.trackLight'), price: t('prices.priceValues.trackLight') },
    { element: t('prices.items.chandelier'), price: t('prices.priceValues.chandelier') },
    { element: t('prices.items.multiLevel'), price: t('prices.priceValues.multiLevel') },
    { element: t('prices.items.printing'), price: t('prices.priceValues.printing') },
  ];
});

const openContactForm = () => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};
</script>
