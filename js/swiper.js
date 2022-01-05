const comfortSwiper = new Swiper('.idc-comfort__swiper .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,


    // Default parameters
    slidesPerView: 1.6,
    spaceBetween: 5,
    autoplay: false,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        360: {
            slidesPerView: 2.2,
            spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.2,
            spaceBetween: 5
        },
        // when window width is >= 640px
        700: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },

    pagination: {
        el: '.idc-comfort__swiper .swiper-pagination',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.idc-swiper-button-next',
        prevEl: '.idc-swiper-button-prev',
    },
});