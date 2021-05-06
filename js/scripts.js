$(document).ready(function(){

    AOS.init();

    $('.navbar-toggler').click(function(){
      $('.navbar-nav').addClass('active');
      $('body').css('overflow','hidden');
    })
    $('.close-btn').click(function(){
      $('.navbar-nav').removeClass('active');
      $('body').css('overflow','auto');
    })

    $('.hotels-slider').slick({
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          }
        ] 
    });

    //console.log($('.main-btn-group a').outerHeight())
	
});