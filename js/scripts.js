$(document).ready(function(){

    AOS.init();

    $('.navbar-toggler').click(function(){
      $('.navbar-nav').addClass('active');
    })
    $('.close-btn').click(function(){
      $('.navbar-nav').removeClass('active');
    })

    /*$('.akc-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 1,
            }
          }
        ] 
    });*/
	
});