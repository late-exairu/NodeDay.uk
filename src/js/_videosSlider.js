import Swiper from 'swiper';

export default function videosSlider() {
  var galleryThumbs = new Swiper('.js-video-thumbs', {
    spaceBetween: 0,
    slidesPerView: '2',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      640: {
    	slidesPerView: 'auto',
      }
    },
  });

  new Swiper('.js-video-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    breakpoints: {
      640: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 40,
      },
      1024: {
        spaceBetween: 80,
      },
    },
  });
}
