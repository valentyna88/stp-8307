import Swiper from 'swiper';
import { Pagination, Keyboard, Mousewheel } from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [Pagination, Keyboard, Mousewheel],
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
  autoHeight: true,
  loop: true,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 24,
  touchEventsTarget: 'container',
  pagination: {
    el: '.swiper-pagination',
  },
});
