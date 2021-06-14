$(document).ready(function (){

    var swiper = new Swiper('.services_container', {
        slidesPerView: 'auto',
        spaceBetween: 35,
        navigation: {
            nextEl: '.services_next',
            prevEl: '.services_prev',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          loop: true,
      });
      var swiper1 = new Swiper('.kid_container', {
        slidesPerView: 1,
        // centeredSlides: true,
        // spaceBetween: 29,
        navigation: {
            nextEl: '.kid_next',
            prevEl: '.kid_prev',
          },
      });

      $(".menu_normal").on("click", function () {
        $(this).css({'display':'none'});
        $('.xclose').css({'display':'block'});
        $('.header_popup').css({'display':'flex'});
        $('.m_sced').css({'display':'none'});
        $('.black_block').css({'display':'block'});
        $('.swiper-pagination').css({'display':'none'});
        document.getElementById('body').style.overflow="hidden";
      })

      $(".xclose").on("click", function () {
        $(this).css({'display':'none'});
        $('.menu_normal').css({'display':'block'});
        $('.header_popup').css({'display':'none'});
        $('.m_sced').css({'display':'block'});
        $('.black_block').css({'display':'none'});
        $('.swiper-pagination').css({'display':'block'});
        document.getElementById('body').style.overflow="auto";
      })

      $(".service_slider").on("click", function (){
        $(".service_slider").removeClass("active_slider");
        $(this).addClass("active_slider");
      })


      $(".openable_menu_items").on("click", function (){
        $(".openable_menu_items").removeClass("opened");
        $(this).addClass("opened");
      })

    
      $('.anchor a').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $('#header').offset().top
        }, {
            duration: 370,   // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 
        });
    
        return false;
    });
})

