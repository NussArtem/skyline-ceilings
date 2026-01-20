<template>
  <div>
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="banner-image">
        <img src="/images/hero-ceiling.jpg" :alt="$t('home.heroAlt')" id="hero-img" />
        <div class="banner-overlay">
          <div class="container">
            <div class="banner-text">
              <h1>{{ $t('home.heroTitle') }}</h1>
              <p>{{ $t('home.heroSubtitle') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Tissue Ceilings -->
    <section class="content-section" key="about">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('home.aboutTitle') }}</h2>
        </div>
        <div class="content-grid">
          <div class="content-text">
            <p class="lead">
              {{ $t('home.aboutLead') }}
            </p>
            <p>{{ $t('home.aboutText') }}</p>
            <ul class="feature-list">
              <li>{{ $t('home.aboutFeature1') }}</li>
              <li>{{ $t('home.aboutFeature2') }}</li>
              <li>{{ $t('home.aboutFeature3') }}</li>
              <li>{{ $t('home.aboutFeature4') }}</li>
            </ul>
          </div>
          <div class="content-images">
            <div class="image-gallery">
              <img
                v-for="(img, index) in tissueImages"
                :key="index"
                :src="img"
                :alt="$t('home.tissueAlt')"
                class="gallery-thumb"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ecology Section -->
    <section class="content-section section-alt" key="ecology">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('home.ecologyTitle') }}</h2>
        </div>
        <div class="content-text">
          <p>
            {{ $t('home.ecologyText') }}
          </p>
        </div>
        <div class="content-grid">
          <div class="content-text">
            <ul class="feature-list">
              <li>{{ $t('home.ecologyFeature1') }}</li>
              <li>{{ $t('home.ecologyFeature2') }}</li>
              <li>{{ $t('home.ecologyFeature3') }}</li>
              <li>{{ $t('home.ecologyFeature4') }}</li>
              <li>{{ $t('home.ecologyFeature5') }}</li>
            </ul>
          </div>
          <div class="content-text">
            <p>
              <strong>{{ $t('home.ecologyWhereTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('home.ecologyWhere1') }}</li>
              <li>{{ $t('home.ecologyWhere2') }}</li>
              <li>{{ $t('home.ecologyWhere3') }}</li>
              <li>{{ $t('home.ecologyWhere4') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Section -->
    <section class="content-section" key="technology">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('home.techTitle') }}</h2>
        </div>
        <div class="content-grid">
          <div class="content-text">
            <p>
              <strong>{{ $t('home.techCompositionTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('home.techComposition1') }}</li>
              <li>
                {{ $t('home.techComposition2') }}
                <ul>
                  <li>{{ $t('home.techComposition2a') }}</li>
                  <li>{{ $t('home.techComposition2b') }}</li>
                  <li>{{ $t('home.techComposition2c') }}</li>
                  <li>{{ $t('home.techComposition2d') }}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="content-text">
            <p>
              <strong>{{ $t('home.techBenefitsTitle') }}</strong>
            </p>
            <ul class="feature-list">
              <li>{{ $t('home.techBenefit1') }}</li>
              <li>{{ $t('home.techBenefit2') }}</li>
              <li>{{ $t('home.techBenefit3') }}</li>
              <li>{{ $t('home.techBenefit4') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Appearance Section -->
    <section class="content-section section-alt" key="appearance">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('home.appearanceTitle') }}</h2>
        </div>
        <div class="content-grid">
          <div class="content-text">
            <p>{{ $t('home.appearanceText') }}</p>
            <ul class="feature-list">
              <li>{{ $t('home.appearance1') }}</li>
              <li>{{ $t('home.appearance2') }}</li>
              <li>{{ $t('home.appearance3') }}</li>
            </ul>
            <p class="mt-2">{{ $t('home.appearanceNote') }}</p>
          </div>
          <div class="content-images">
            <img
              src="/images/gallery-1.jpg"
              :alt="$t('home.appearanceTitle')"
              class="gallery-thumb"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="content-section" key="comparison">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('home.comparisonTitle') }}</h2>
        </div>
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('home.comparisonParameter') }}</th>
                <th>{{ $t('home.comparisonTissue') }}</th>
                <th>{{ $t('home.comparisonPVC') }}</th>
                <th>{{ $t('home.comparisonGypsum') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparisonData" :key="row.parameter">
                <td>
                  <strong>{{ row.parameter }}</strong>
                </td>
                <td>{{ row.tissue }}</td>
                <td>{{ row.pvc }}</td>
                <td>{{ row.gypsum }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="content-text">
          <p class="mt-2">
            {{ $t('home.comparisonNote') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Types Section -->
    <section class="content-section section-alt" key="types">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('home.typesTitle') }}</h2>
        </div>
        <div class="types-grid">
          <div v-for="type in ceilingTypes" :key="type.slug" class="type-card">
            <h3>
              <NuxtLink :to="localePath(`/${type.slug}`)">{{ type.title }}</NuxtLink>
            </h3>
            <p>{{ type.description }}</p>
          </div>
        </div>
        <div class="cta-section">
          <NuxtLink :to="localePath('/prices')" class="btn btn-primary">{{
            $t('home.pricesButton')
          }}</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO';

const { t } = useI18n();
const localePath = useLocalePath();

// SEO мета-теги
useSEO('home.heroTitle', 'home.aboutLead', '/images/hero-ceiling.jpg');

const tissueImages = [
  '/images/tissue-sample-1.jpg',
  '/images/tissue-sample-2.jpg',
  '/images/tissue-sample-3.jpg',
];

const comparisonData = computed(() => {
  return [
    {
      parameter: t('home.comparisonData.material.parameter'),
      tissue: t('home.comparisonData.material.tissue'),
      pvc: t('home.comparisonData.material.pvc'),
      gypsum: t('home.comparisonData.material.gypsum'),
    },
    {
      parameter: t('home.comparisonData.ecology.parameter'),
      tissue: t('home.comparisonData.ecology.tissue'),
      pvc: t('home.comparisonData.ecology.pvc'),
      gypsum: t('home.comparisonData.ecology.gypsum'),
    },
    {
      parameter: t('home.comparisonData.smell.parameter'),
      tissue: t('home.comparisonData.smell.tissue'),
      pvc: t('home.comparisonData.smell.pvc'),
      gypsum: t('home.comparisonData.smell.gypsum'),
    },
    {
      parameter: t('home.comparisonData.allergy.parameter'),
      tissue: t('home.comparisonData.allergy.tissue'),
      pvc: t('home.comparisonData.allergy.pvc'),
      gypsum: t('home.comparisonData.allergy.gypsum'),
    },
    {
      parameter: t('home.comparisonData.breathable.parameter'),
      tissue: t('home.comparisonData.breathable.tissue'),
      pvc: t('home.comparisonData.breathable.pvc'),
      gypsum: t('home.comparisonData.breathable.gypsum'),
    },
    {
      parameter: t('home.comparisonData.appearance.parameter'),
      tissue: t('home.comparisonData.appearance.tissue'),
      pvc: t('home.comparisonData.appearance.pvc'),
      gypsum: t('home.comparisonData.appearance.gypsum'),
    },
    {
      parameter: t('home.comparisonData.seams.parameter'),
      tissue: t('home.comparisonData.seams.tissue'),
      pvc: t('home.comparisonData.seams.pvc'),
      gypsum: t('home.comparisonData.seams.gypsum'),
    },
    {
      parameter: t('home.comparisonData.cracks.parameter'),
      tissue: t('home.comparisonData.cracks.tissue'),
      pvc: t('home.comparisonData.cracks.pvc'),
      gypsum: t('home.comparisonData.cracks.gypsum'),
    },
    {
      parameter: t('home.comparisonData.temperature.parameter'),
      tissue: t('home.comparisonData.temperature.tissue'),
      pvc: t('home.comparisonData.temperature.pvc'),
      gypsum: t('home.comparisonData.temperature.gypsum'),
    },
    {
      parameter: t('home.comparisonData.installation.parameter'),
      tissue: t('home.comparisonData.installation.tissue'),
      pvc: t('home.comparisonData.installation.pvc'),
      gypsum: t('home.comparisonData.installation.gypsum'),
    },
    {
      parameter: t('home.comparisonData.painting.parameter'),
      tissue: t('home.comparisonData.painting.tissue'),
      pvc: t('home.comparisonData.painting.pvc'),
      gypsum: t('home.comparisonData.painting.gypsum'),
    },
    {
      parameter: t('home.comparisonData.lifespan.parameter'),
      tissue: t('home.comparisonData.lifespan.tissue'),
      pvc: t('home.comparisonData.lifespan.pvc'),
      gypsum: t('home.comparisonData.lifespan.gypsum'),
    },
  ];
});

const ceilingTypes = computed(() => {
  return [
    {
      slug: 'shadow-ceilings',
      title: t('home.typesShadow'),
      description: t('home.typesShadowDesc'),
    },
    {
      slug: 'floating-ceilings',
      title: t('home.typesFloating'),
      description: t('home.typesFloatingDesc'),
    },
    {
      slug: 'multi-level-ceilings',
      title: t('home.typesMultiLevel'),
      description: t('home.typesMultiLevelDesc'),
    },
    {
      slug: 'printed-ceilings',
      title: t('home.typesPrinted'),
      description: t('home.typesPrintedDesc'),
    },
  ];
});
</script>
