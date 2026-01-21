export const useScrollAnimations = () => {
  let observer = null;
  let scrollHandler = null;
  let parallaxElements = [];

  const init = () => {
    if (typeof window === 'undefined') return;

    // Очищаем старые наблюдатели если они есть
    if (observer) {
      observer.disconnect();
    }
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler);
    }

    // IntersectionObserver для активации анимаций
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

    // Наблюдаем за всеми секциями
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
      // Сбрасываем класс visible при переинициализации
      section.classList.remove('visible');
      
      // Проверяем, виден ли элемент сразу при загрузке
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        // Если элемент уже виден, добавляем класс с небольшой задержкой
        setTimeout(() => {
          section.classList.add('visible');
        }, 100);
      } else {
        observer.observe(section);
      }
    });

    // Параллакс эффект для текста при скролле
    parallaxElements = document.querySelectorAll('.content-grid .content-text');
    
    scrollHandler = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      parallaxElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementCenter = elementTop + rect.height / 2;
        const viewportCenter = scrollY + windowHeight / 2;
        const distance = viewportCenter - elementCenter;
        
        // Применяем параллакс только если элемент виден
        if (rect.top < windowHeight && rect.bottom > 0) {
          const offset = distance * 0.15;
          el.style.setProperty('--scroll-offset', `${offset}px`);
          el.classList.add('scroll-parallax');
        }
      });

      // Sticky меню внизу при скролле (как на Studio REDD)
      const mainNav = document.querySelector('.main-nav');
      if (mainNav && scrollY > windowHeight * 0.5) {
        mainNav.classList.add('sticky-bottom');
      } else if (mainNav) {
        mainNav.classList.remove('sticky-bottom');
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler(); // Вызываем сразу для начальной позиции
  };

  const destroy = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler);
      scrollHandler = null;
    }
    parallaxElements = [];
  };

  return {
    init,
    destroy,
  };
};
