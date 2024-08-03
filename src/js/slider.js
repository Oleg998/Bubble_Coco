import Swiper from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/bundle'

    const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 8,
    loop: true,
    speed: 600,
  
    modules: [Navigation, Keyboard],
    navigation: {
      nextEl: '.open-right',
      prevEl: '.open-left',
    },
  
    keyboard: {
      enabled: true,
    },
  
    breakpoints: {
      1440: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },
  });