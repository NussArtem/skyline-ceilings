export const useScrollAnimations = () => {
  let observer = null;

  const init = () => {
    if (typeof window === 'undefined') return;

    if (observer) {
      observer.disconnect();
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
      section.classList.remove('visible');

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        setTimeout(() => {
          section.classList.add('visible');
        }, 100);
      } else {
        observer.observe(section);
      }
    });
  };

  const destroy = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  return {
    init,
    destroy,
  };
};
