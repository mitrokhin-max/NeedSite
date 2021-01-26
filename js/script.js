var wrapper = new Swiper('.wrapper', {
    direction: 'vertical',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    mousewheel: true,
    loop: false,
    parallax: true,

    pagination: {
        el: '.wrapper__menu',
        type: 'bullets',
        clickable: true,
    },
});

var portfolio = new Swiper('.portfolio__slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});

var words = new Swiper('.words', {
    // watchSlidesProgress: true,
    // watchSlidesVisibility: true,
    autoHeight: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

var photos = new Swiper('.photos', {
    thumbs: {
        swiper: words,
    },
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: '.photos__button-next',
        prevEl: '.photos__button-prev',
    },
});

var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector('.plan'));