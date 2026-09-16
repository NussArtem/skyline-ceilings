<template>
  <div
    ref="containerRef"
    class="masonry-list"
    :class="{ 'is-ready': imagesReady }"
    :style="{ height: containerHeight + 'px' }"
  >
    <div
      v-for="item in grid"
      :key="item.id"
      :data-key="item.id"
      class="masonry-item"
      role="button"
      tabindex="0"
      :style="{
        width: `${item.w}px`,
        height: `${item.h}px`,
        transform: `translate3d(${item.x}px, ${item.y}px, 0)`,
      }"
      @click="emit('select', item)"
      @keydown.enter.prevent="emit('select', item)"
      @mouseenter="onEnter($event, item)"
      @mouseleave="onLeave($event, item)"
    >
      <div class="masonry-item__img" :style="{ backgroundImage: `url(${item.img})` }">
        <div v-if="colorShiftOnHover" class="masonry-item__overlay" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  items: { type: Array, required: true },
  ease: { type: String, default: 'power3.out' },
  duration: { type: Number, default: 0.6 },
  stagger: { type: Number, default: 0.05 },
  animateFrom: { type: String, default: 'bottom' },
  scaleOnHover: { type: Boolean, default: true },
  hoverScale: { type: Number, default: 0.95 },
  blurToFocus: { type: Boolean, default: true },
  colorShiftOnHover: { type: Boolean, default: false },
});

const emit = defineEmits(['select']);

const containerRef = ref(null);
const width = ref(0);
const imagesReady = ref(false);
const hasMounted = ref(false);
const columns = ref(3);
let animating = false;

const queries = [
  '(min-width:1500px)',
  '(min-width:1000px)',
  '(min-width:600px)',
  '(min-width:400px)',
];
const colValues = [5, 4, 3, 2];

const updateColumns = () => {
  if (typeof window === 'undefined') {
    columns.value = 3;
    return;
  }
  const idx = queries.findIndex((q) => window.matchMedia(q).matches);
  columns.value = idx === -1 ? 1 : colValues[idx];
};

const measure = () => {
  if (!containerRef.value) return;
  const next = containerRef.value.getBoundingClientRect().width;
  if (Math.abs(next - width.value) < 0.5) return;
  width.value = next;
};

const grid = computed(() => {
  if (!width.value) return [];
  const colHeights = new Array(columns.value).fill(0);
  const columnWidth = width.value / columns.value;

  return props.items.map((child) => {
    const col = colHeights.indexOf(Math.min(...colHeights));
    const x = columnWidth * col;
    const height = child.height / 2;
    const y = colHeights[col];
    colHeights[col] += height;
    return { ...child, x, y, w: columnWidth, h: height };
  });
});

const containerHeight = computed(() => {
  if (!grid.value.length) return 0;
  return Math.max(...grid.value.map((item) => item.y + item.h));
});

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = img.onerror = () => resolve();
          img.src = src;
        })
    )
  );
};

const animateGrid = async () => {
  if (!imagesReady.value || !grid.value.length || animating) return;
  animating = true;
  await nextTick();

  grid.value.forEach((item, index) => {
    const el = containerRef.value?.querySelector(`[data-key="${item.id}"]`);
    if (!el) return;

    if (!hasMounted.value) {
      // Position already set via CSS — only fade in (no fly-in / no layout jump)
      gsap.fromTo(
        el,
        {
          opacity: 0,
          ...(props.blurToFocus ? { filter: 'blur(8px)' } : {}),
        },
        {
          opacity: 1,
          ...(props.blurToFocus ? { filter: 'blur(0px)' } : {}),
          duration: 0.45,
          ease: 'power2.out',
          delay: index * props.stagger,
        }
      );
    }
  });

  hasMounted.value = true;
  animating = false;
};

const onEnter = (e, item) => {
  const el = e.currentTarget;
  const img = el.querySelector('.masonry-item__img');

  if (props.scaleOnHover && img) {
    gsap.to(img, { scale: props.hoverScale, duration: 0.3, ease: 'power2.out' });
  }

  if (props.colorShiftOnHover) {
    const overlay = el.querySelector('.masonry-item__overlay');
    if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
  }
};

const onLeave = (e, item) => {
  const el = e.currentTarget;
  const img = el.querySelector('.masonry-item__img');

  if (props.scaleOnHover && img) {
    gsap.to(img, { scale: 1, duration: 0.3, ease: 'power2.out' });
  }

  if (props.colorShiftOnHover) {
    const overlay = el.querySelector('.masonry-item__overlay');
    if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
  }
};

let resizeObserver = null;
const mediaCleanups = [];

onMounted(async () => {
  updateColumns();
  measure();

  queries.forEach((q) => {
    const mql = window.matchMedia(q);
    const handler = () => {
      updateColumns();
      measure();
    };
    mql.addEventListener('change', handler);
    mediaCleanups.push(() => mql.removeEventListener('change', handler));
  });

  if (containerRef.value) {
    resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(containerRef.value);
  }

  await preloadImages(props.items.map((i) => i.img));
  imagesReady.value = true;
  await animateGrid();
});

watch(
  () => props.items,
  async (items) => {
    hasMounted.value = false;
    imagesReady.value = false;
    await preloadImages(items.map((i) => i.img));
    imagesReady.value = true;
    await animateGrid();
  },
  { deep: true }
);

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  mediaCleanups.forEach((fn) => fn());
});
</script>

<style scoped>
.masonry-list {
  position: relative;
  width: 100%;
  min-height: 240px;
}

.masonry-item {
  position: absolute;
  top: 0;
  left: 0;
  padding: 6px;
  cursor: pointer;
  box-sizing: border-box;
  opacity: 0;
  will-change: transform, opacity;
}

.masonry-item__img {
  position: relative;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 50px -10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #ececec;
  transform-origin: center center;
}

.masonry-item__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(255, 0, 150, 0.5), rgba(0, 150, 255, 0.5));
  opacity: 0;
  pointer-events: none;
  border-radius: 10px;
}
</style>
