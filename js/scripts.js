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
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
            }
          }
        ] 
    });

    //console.log($('.why-novostar-blockquote').outerHeight())

    $('.big-video, .small-video').click(function(){
      let link = $(this).children('img').attr('data-link');
      $('.video-popup').addClass('visible');
      $('.video-popup iframe').attr('src','https://www.youtube.com/embed/'+link+'?autoplay=1');
    })

    $('.close-video-popup').click(function(){
      $('.video-popup').removeClass('visible');
      $('.video-popup iframe').attr('src','');
    })
	
});