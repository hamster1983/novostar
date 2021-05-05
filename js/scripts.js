$(document).ready(function(){

    AOS.init();

    $('.navbar-toggler').click(function(){
      $('.navbar-nav').addClass('active');
    })
    $('.close-btn').click(function(){
      $('.navbar-nav').removeClass('active');
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
    });
	
});