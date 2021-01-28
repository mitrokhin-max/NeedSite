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
    speed: 800,
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
    allowTouchMove: false,
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


const mediaQuery = window.matchMedia('(max-width: 575.98px)')
function handleTabletChange(e) {
    if (e.matches) {
        $(document).ready(function() {
    
            /* Аккордеон */
            $('.plan__subtitle').click(function(event) {
                if ($('.plan__text').hasClass('akkordeon')) {
                    $('.plan__subtitle').not($(this)).removeClass('active');
                    $('.plan__description').not($(this).next()).slideUp(300);
                }
                $(this).toggleClass('active').next().slideToggle(300);
            });
        });
    }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)