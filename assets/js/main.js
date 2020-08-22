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
$('.custom-burger').on('click', function() {
    $('.custom-burger').toggleClass('open');
    var burgerMenu = $('.custom-burger-collapse');
    burgerMenu.toggleClass('show');

});
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500);
});
$('.custom-burger-collapse ul li a ').on('click', function() {
    var burgerMenu = $('.custom-burger-collapse');
    burgerMenu.toggleClass('show');

});


//viewport
$(window).scroll(function() {
    $('.slide-up, .slide-down, .slide-left, .slide-right').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen + $(this).innerHeight() / 2 + 50 > top_of_element) && (top_of_screen < bottom_of_element)) {
            $(this).addClass('show');
        }
    });

}).scroll();