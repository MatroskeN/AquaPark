$(document).ready(function (){

    var swiper = new Swiper('.services_container', {
        slidesPerView: 'auto',
        spaceBetween: '29',
        navigation: {
            nextEl: '.services_next',
            prevEl: '.services_prev',
          },
      });
      var swiper1 = new Swiper('.kid_container', {
        slidesPerView: '1',
        navigation: {
            nextEl: '.kid_next',
            prevEl: '.kid_prev',
          },
      });
    
})

