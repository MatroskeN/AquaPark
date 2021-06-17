$(document).ready(function (){

    var swiper = new Swiper('.services_container', {
        slidesPerView: '2',
        spaceBetween: 20,
        loop:true,
        breakpoints: {
          426: {
            spaceBetween: 29,
            slidesPerView: '6',
          },
        },
        navigation: {
            nextEl: '.services_next',
            prevEl: '.services_prev',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          
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
        $('#head').css({'position':'absolute'});
        $('html, body').animate({
          scrollTop: $('#header').offset().top
          }, {
              duration: 370,   // по умолчанию «400» 
              easing: "linear" // по умолчанию «swing» 
          });
        //document.getElementById('body').style.overflow="hidden";
      })

      $(".xclose").on("click", function () {
        $(this).css({'display':'none'});
        $('.menu_normal').css({'display':'block'});
        $('.header_popup').css({'display':'none'});
        $('.m_sced').css({'display':'block'});
        $('.black_block').css({'display':'none'});
        $('.swiper-pagination').css({'display':'block'});
        $(".opened").addClass("non_open");
        $(".opened").removeClass("opened");
        $('#head').css({'position':'fixed'});
        //document.getElementById('body').style.overflow="auto";
      })
      $(".black_block").on("click", function (){
        $(".xclose").css({'display':'none'});
        $('.menu_normal').css({'display':'block'});
        $('.header_popup').css({'display':'none'});
        $('.m_sced').css({'display':'block'});
        $('.black_block').css({'display':'none'});
        $('.swiper-pagination').css({'display':'block'});
        $(".opened").addClass("non_open");
        $(".opened").removeClass("opened");
        $('#head').css({'position':'fixed'});
      })
      $(".service_slider").on("click", function (){
        $(".service_slider").removeClass("active_slider");
        $(this).addClass("active_slider");
      })
      

      //burger menu items
      let counter = 1;
      $(".non_open").on("click", function (){
        if (counter == 1){
          $(".non_open").removeClass("opened");
          $(this).addClass("opened");
          $(this).removeClass("non_open");
          counter*=-1;
        } else {
          $(this).removeClass("opened");
          $(this).addClass("non_open");
          counter*=-1;
        }
      })

    
      $('.anchor a').on('click', function() {
    
        $('html, body').animate({
            scrollTop: $('#header').offset().top
        }, {
            duration: 370,   // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 
        });
    
        return false;
    });


    function Scedhule(){
      if (document.getElementById('scedh').style.opacity==1){
        console.log('yea');
        $('.m_sced').css({'pointer-events':'none'});
      } else{
        console.log('nope');
        $('.m_sced').css({'pointer-events':'all'});
      }
    }
    let timerId = setInterval(() => Scedhule(), 500);
    /**
    * Animate:Breeze
    */
      let line = document.querySelectorAll('.top_breeze');
      let size = 0;
      setInterval(function(){
      UpdateLine();
      }, 30);
      function UpdateLine(){
      size = size - 2;
      line.forEach(element => {
      element.style.backgroundPosition = size + 'px 0px';
      });
      size = size - 2;
      }
})

$( document ).ready(function() {
  /**
    * Animate:Breeze
    */
   let line = document.querySelectorAll('.breeze');
   let size = 0;
   setInterval(function(){
   UpdateLine();
   }, 30);
   function UpdateLine(){
   size = size + 2;
   line.forEach(element => {
   element.style.backgroundPosition = size + 'px 0px';
   });
   size = size + 2;
   }
});

