<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ $t('footer.title') }}</h3>
          <p>{{ $t('footer.description') }}</p>
        </div>
        <div class="footer-section">
          <h4>{{ $t('footer.contacts') }}</h4>
          <p><a href="tel:+34662484848">{{ $t('header.phone') }}</a></p>
          <p>{{ $t('header.workingHours') }}</p>
        </div>
        <div class="footer-section">
          <h4>{{ $t('footer.followUs') }}</h4>
          <div class="social-links">
            <a href="#" target="_blank">TikTok</a>
            <a href="#" target="_blank">Instagram</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>
