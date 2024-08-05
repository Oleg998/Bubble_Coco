import Swiper from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/bundle'

    const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: 1.5,
    slidesPerGroup:1,

    spaceBetween: 38,
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
        slidesPerView: 3,
        spaceBetween:68 ,
      },
    
    },

    on: {
      slideChangeTransitionStart: function () {
        this.slides.forEach((slide) => {
          slide.style.transform = 'scale(1)';
        });
        this.slides[this.activeIndex].style.transform = 'scale(1.33)';
      },
      init: function () {
        this.slides.forEach((slide) => {
          slide.style.transition = 'transform 0.6s';
        });
        this.slides[this.activeIndex].style.transform = 'scale(1.33)';
      },
    },

   

  });

  