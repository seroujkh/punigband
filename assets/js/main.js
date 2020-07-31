var swiper = new Swiper('.swiper-container', {
    allowTouchMove: true,
    slidesPerView: 1.1,
    paginationClickable: true,
    preventClicks: true,
    centeredSlides: true,
    spaceBetween: 5,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    pagination: {
        el: null
    },
    breakpoints: {
        1199: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
        767: {
            slidesPerView: 1.2,
            spaceBetween: 18,
        },
        500: {
            slidesPerView: 1.2,
            spaceBetween: 0,
        }
    },
    on: {
        resize: function() {
            swiperClients2.update();
        }
    }

});
$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$('.custom-burger, .close-menu').on('click', function() {
    var burgerMenu = $('.custom-burger-collapse');
    burgerMenu.toggleClass('show');

});