$(document).ready(function(){

    //AOS.init();

    $('.navbar-toggler').click(function(){
      $('.navbar-nav').addClass('active');
      //$('body').css('overflow','hidden');
    })
    $('.close-btn').click(function(){
      $('.navbar-nav').removeClass('active');
      //$('body').css('overflow','auto');
    })

    if ($(window).width() < '1280') {
      $('.dropdown-item .nav-link').on('click',function(e) {
        e.preventDefault();
        $(this).next('.dropdown-menu').toggleClass('display');
      })
    }

    $(window).on('resize orientationchange', function() {
      if ($(window).width() < '1280') {
        $('.dropdown-item .nav-link').on('click',function(e) {
          e.preventDefault();
          $(this).next('.dropdown-menu').toggleClass('display');
        })
      }
    });

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


    //функция проверки активности радиобаттона в разделе ФОТО
    function photoInputIsChecked() {
      let id = '';
      $('.photo-wrap input').each(function(){
        if($(this).prop('checked')) {
          id = $(this).attr('id');
        }
      });
      $('.photos img').each(function(){
        if($(this).hasClass(id)) {
          $(this).attr('src',$(this).attr('data-src'));
        }
      });
    }
    photoInputIsChecked(); 

    $('.photo-labels label').on('click', function(){
      setTimeout(function(){
        photoInputIsChecked();
      },100)
    });


    //массивы объектов с путями к картинкам и подписями
    const allGallery = [
      { 'src': 'img/photo/all/1.jpg', 'title': 'Люди с флагами' },
      { 'src': 'img/photo/all/2.jpg', 'title': 'Пенная вечеринка' },
      { 'src': 'img/photo/all/3.jpg', 'title': 'Экскурсия' },
      { 'src': 'img/photo/all/4.jpg', 'title': 'Завтрак у бассейна' },
      { 'src': 'img/photo/all/5.jpg', 'title': 'Лежаки' }
    ];

    const animGallery = [
      { 'src': 'img/photo/anim/1.jpg', 'title': 'Пенная вечеринка' },
      { 'src': 'img/photo/anim/2.jpg', 'title': 'Игры с детьми' },
      { 'src': 'img/photo/anim/3.jpg', 'title': 'Детский бодиарт' },
      { 'src': 'img/photo/anim/4.jpg', 'title': 'Спортивные мероприятия' },
      { 'src': 'img/photo/anim/5.jpg', 'title': 'Канис-терапия' },
      { 'src': 'img/photo/anim/6.jpg', 'title': 'Детские мастер-классы' },
      { 'src': 'img/photo/anim/7.jpg', 'title': 'Детские мастер-классы - 2' },
      { 'src': 'img/photo/anim/8.jpg', 'title': 'Факельное шоу на воде' },
      { 'src': 'img/photo/anim/9.jpg', 'title': 'Тантамареска' },
      { 'src': 'img/photo/anim/10.jpg', 'title': 'Спорт на пляже' },
      { 'src': 'img/photo/anim/11.jpg', 'title': 'Выход в море на яхте' },
      { 'src': 'img/photo/anim/12.jpg', 'title': 'Детские мастер-классы - 3' },
      { 'src': 'img/photo/anim/13.jpg', 'title': 'Огненное шоу' },
      { 'src': 'img/photo/anim/14.jpg', 'title': 'Люди с флагами' }
    ];

    const eventGallery = [
      { 'src': 'img/photo/event/1.jpg', 'title': 'Экскурсия' },
      { 'src': 'img/photo/event/2.jpg', 'title': 'Шарики на пляже' },
      { 'src': 'img/photo/event/3.jpg', 'title': 'Финал забега' },
      { 'src': 'img/photo/event/4.jpg', 'title': 'Пляжный волейбол' },
      { 'src': 'img/photo/event/5.jpg', 'title': 'Чествование победителей' },
      { 'src': 'img/photo/event/6.jpg', 'title': 'Чествование победителей - 2' },
      { 'src': 'img/photo/event/7.jpg', 'title': 'Чествование победителей - 3' },
      { 'src': 'img/photo/event/8.jpg', 'title': 'Чествование победителей - 4' }
    ];

    const foodGallery = [
      { 'src': 'img/photo/food/1.jpg', 'title': 'Завтрак у бассейна' },
      { 'src': 'img/photo/food/2.jpg', 'title': 'Салаты' },
      { 'src': 'img/photo/food/3.jpg', 'title': 'Гриль' },
      { 'src': 'img/photo/food/4.jpg', 'title': 'Креветки' },
      { 'src': 'img/photo/food/5.jpg', 'title': 'Салаты - 2' },
      { 'src': 'img/photo/food/6.jpg', 'title': 'Роллы' },
      { 'src': 'img/photo/food/7.jpg', 'title': 'Арбуз' },
      { 'src': 'img/photo/food/8.jpg', 'title': 'Десерты' },
      { 'src': 'img/photo/food/9.jpg', 'title': 'Столики на пляже' },
      { 'src': 'img/photo/food/10.jpg', 'title': 'Фрукты' }
    ];

    const seeGallery = [
      { 'src': 'img/photo/see/1.jpg', 'title': 'Лежаки' },
      { 'src': 'img/photo/see/2.jpg', 'title': 'Панорамный вид' },
      { 'src': 'img/photo/see/3.jpg', 'title': 'Вид на бассейн' },
      { 'src': 'img/photo/see/4.jpg', 'title': 'Вид на бассейн - 2' },
      { 'src': 'img/photo/see/5.jpg', 'title': 'Лежаки под навесом' },
      { 'src': 'img/photo/see/6.jpg', 'title': 'Панорамный вид - 2' }
    ];

    //динамическое создание лейблов к инпутам
    $('.gallery-popup input').each(function(){
        let id = $(this).attr('id'); 
        let title = $(this).attr('data-title');
        let count = $(this).attr('data-count');
        let gal = eval($(this).attr('data-gallery'));
        let pic = gal[0].src;
        $('.gallery-labels').append('<label for="'+id+'"><span class="label-gal-title">'+title+'</span> <span class="label-all-photo">('+count+')</span> <img src="'+pic+'" alt=""></label>');
    });

    //функция создания разметки галереи
    function createGallery(gallery) {
      let galHtml = '';
      for(let i = 0; i < gallery.length; i++) {
        galHtml += '<div class="gallery-item"><div class="gallery-pic-wrap"><img src="'+gallery[i].src+'" alt=""></div><span class="gallery-pic-title">'+gallery[i].title+'</span></div>';
      }
      $('.gallery-slider').html(galHtml).slick({
        arrows: true,
        dots: false,
        fade: true
      });
    }

    //функция проверки активности радиобаттона, передачи названия и количества фотографий в заголовок, а также динамическое создание галереи
    function galleryInputIsChecked() {
      $('.gallery-popup input').each(function(){
        if($(this).prop('checked')) {
          let title = $(this).attr('data-title');
          let count = $(this).attr('data-count');
          let gal = eval($(this).attr('data-gallery'));
          $('.gal-title').text(title);
          $('.gal-all-slides').text(count);
          createGallery(gal);
        }
      });
    }
    galleryInputIsChecked(); 

    //динамическое пересоздание галерей при переключении инпутов
    $('.gallery-labels label').on('click', function(){
      setTimeout(function(){
        $('.gal-current-slide').text(1);
        $('.gallery-slider').slick('unslick');
        galleryInputIsChecked();
      },100)
    });

    //счётчки слайдов при перелистывании
    $('.gallery-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.gal-current-slide').text(nextSlide + 1);
    });

    //запуск модалки со слайдером
    $('.see-all-photo-btn').on('click', function(){
      $('.gallery-popup-wrap').addClass('visible');
    });

    $('.close-gallery-popup').on('click', function(){
      $('.gallery-popup-wrap').removeClass('visible');
    });


    //открытие видео в popup
    $('.big-video, .small-video, .hotel-description-video').on('click', function(){
      let link = '';
      $(this).children('img').each(function(){
        if($(this).css('z-index') == 2) {
          link = $(this).attr('data-link');
        }
      });
      $('.video-popup').addClass('visible');
      $('.video-popup iframe').attr('src','https://www.youtube.com/embed/'+link+'?autoplay=1');
    });

    $('.close-video-popup').on('click', function(){
      $('.video-popup').removeClass('visible');
      $('.video-popup iframe').attr('src','');
    });


    /* меню в разделе ОТЕЛЬ */
    function hotelNavChange() {
      let hotelNavOffset = $('.hotel-nav').offset().top;
      let width = $('.hotel-content').outerWidth();
      let height = $('.hotel-nav').outerHeight();
      $(window).scroll(function(){
        if($(window).scrollTop()>=hotelNavOffset) {
          $('.hotel-nav').css({'position':'fixed', 'width':width});
          $('body').css('padding-top',height);
        }
        else {
          $('.hotel-nav').css({'position':'static', 'width':'auto'});
          $('body').css('padding-top',0);
        }
      });
    }
    hotelNavChange();

    $(window).on('resize orientationchange', function(){
      hotelNavChange();
    });
	
});