var wrapper = new Swiper('.wrapper', {
    direction: 'vertical',
    mousewheel: true,
    parallax: true,
    speed: 700,

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
    slidesPerView: 'auto',
    loop: true,
    nested: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.portfolio__btn-next',
        prevEl: '.portfolio__btn-prev',
    },

    breakpoints: {
        576: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        },
    }
});

var words = new Swiper('.words', {
    // watchSlidesProgress: true,
    // watchSlidesVisibility: true,
    // allowTouchMove: false,
    nested: true,
    autoHeight: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

var photos = new Swiper('.photos', {
    // controller: {
    //     control: words,
    // },
    nested: true,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: '.photos__button-next',
        prevEl: '.photos__button-prev',
    },
});
// Управление друг другом
words.controller.control = photos;
photos.controller.control = words;

// Схема работы
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

// Табы
$('.advantages__tabs').each(function() {
	let ths = $(this);
	ths.find('.advantages__description').not(':first').hide();
	ths.find('.advantages__icon').click(function() {
		ths.find('.advantages__icon').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.advantages__description').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});