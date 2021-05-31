// start

// плагін дропдауна
$('body').append('<div class="levus-dropdown-wrapper"></div>');

$('.levus-dropdown-wrapper').on('click', function () {
    $('.nav-panel').removeClass('open');
    $('.levus-dropdown-content').removeClass('open');
    $(this).removeClass('open');

    // mobile
    $('#nav').removeClass('open');
    $('body').removeClass('lock');
});

$('.nav-panel').on('click', function () {

    $('.levus-dropdown-content').removeClass('open');

    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
    } else {
        $('.nav-panel').removeClass('open');
        $(this).addClass('open');
        $(this).next('.levus-dropdown-content').addClass('open');
    }

    if ($('.levus-dropdown-content.open').length > 0) {
        $('.levus-dropdown-wrapper').addClass('open');
    } else {
        $('.levus-dropdown-wrapper').removeClass('open');
    }

    $('#more-link').removeClass('open');

    $('#nav').removeClass('open');
    $('#menu-button').removeClass('open');
    $('body').removeClass('lock');

});
// плагін дропдауна

// зв'язка місто + контакти
if (localStorage.getItem('city') !== null){

    var city = localStorage.getItem('city');
    
    // значить уже якась назва лежить
    if(localStorage.getItem('city') == 'Борислав'){
        $('.levus-dropdown-content .phones').eq(0).addClass('open');
        $('.levus-dropdown-content .phones').eq(1).removeClass('open');

        $('.levus-dropdown-content .shedule').eq(0).addClass('open');
        $('.levus-dropdown-content .shedule').eq(1).removeClass('open');
    } else {
        $('.levus-dropdown-content .phones').eq(0).removeClass('open');
        $('.levus-dropdown-content .phones').eq(1).addClass('open');
        
        $('.levus-dropdown-content .shedule').eq(0).removeClass('open');
        $('.levus-dropdown-content .shedule').eq(1).addClass('open');
    }

    $('#city').text(city);
    $('#nav-panel-contacts .levus-dropdown-content h5:first-child').text(city);
}

$('.cities li a').on('click', function () {
    var city = $(this).text();

    // міняємо назву міста
    $('#city').text(city);
    $('#nav-panel-contacts .levus-dropdown-content h5:first-child').text(city);

    // закриваємо випадачку
    $('.levus-dropdown').removeClass('open')
    $('.levus-dropdown-content').removeClass('open')

    if (localStorage.getItem('city') !== null){
        // значить уже якась назва лежить
        if(localStorage.city == 'Борислав'){
            $('.levus-dropdown-content .phones').eq(0).addClass('open');
            $('.levus-dropdown-content .phones').eq(1).removeClass('open');

            $('.levus-dropdown-content .shedule').eq(0).addClass('open');
            $('.levus-dropdown-content .shedule').eq(1).removeClass('open');
        } else {
            $('.levus-dropdown-content .phones').eq(0).removeClass('open');
            $('.levus-dropdown-content .phones').eq(1).addClass('open');

            $('.levus-dropdown-content .shedule').eq(0).removeClass('open');
            $('.levus-dropdown-content .shedule').eq(1).addClass('open');
        }
        // перезаписуємо
        localStorage.setItem('city', city);
    } else {
        localStorage.setItem('city', city);
    }
});
// зв'язка місто + контакти

/* 
// drop inner ul
$('#more-link').on('click', function () {
    $(this).toggleClass('open');

    setTimeout(() => {
        $('#more-link').removeClass('open');
    }, 3000);
});
 */

// slider home page
$('#slider .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});


// mobile menu
$('#menu-button').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('open');

    $('#nav').toggleClass('open');
    $('body').toggleClass('lock');

    // закриваємо випадачку
    $('.levus-dropdown').removeClass('open');
    $('.levus-dropdown-content').removeClass('open');
});

// 1 кнопка активна
$('#rates dt span').eq(0).addClass('active');

// 1 вкладка активна
$('#rates dd > div').eq(0).addClass('active');

// вкладки у тарифах
$('#rates dt span').on('click', function(){

    var cnt = $(this).index();

    // підсвічуємо активний, вимикаємо неактивні
    $(this).addClass('active').siblings().removeClass('active');

    // так само
    $('#rates dd > div').removeClass('active').eq(cnt).addClass('active');

});


// вирівнювання блоків у тарифі -- за найбільшим (за 1 тарифом, бо він буде скоріше за все і найдовшим)
var optionsHeight = $('.tariff .options').eq(0).height();
$('.tariff .options').height(optionsHeight);

// блок ціни 
var priceHeight = $('.tariff .price').eq(0).height();
$('.tariff .price').height(priceHeight);

var paramsHeight = $('.tariff .params').eq(0).height();
$('.tariff .params').height(paramsHeight);



// чекбокси у тарифі
$('.select-single input[type=checkbox]').on('change', function () {

    var group = $(this).closest('.select-single');

    $('input[type=checkbox]', group).removeClass('selected-item');

    $(this).addClass('selected-item');
    $('input[type=checkbox]:not(.selected-item)', group).prop('checked', false);

    $('input[type=checkbox]', group).removeClass('disabled');

    if ($('input[type=checkbox]:checked', group).length > 0)
        $('input[type=checkbox]:not(:checked)', group).addClass('disabled');

    if ($(this).is(':checked') && $(this).is('.disabled'))
    {
        $(this).prop('checked', false);
    }

});

// faq
$('#faq-content dt').on('click', function(){
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
});

// end