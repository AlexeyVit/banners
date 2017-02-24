jQuery(document).ready(function($) {
	
	// main-slider
    $('.js-main-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: false,
	  dots: true
    });

    // маска для номера телефона
    $('.jsPhoneMask').mask("+7 (999) 999-99-99");

    	// To Top
    $('.st-content').scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });
    $('#to-top').click(function() {
        $('.st-content').animate({scrollTop:0},800);
    });

});