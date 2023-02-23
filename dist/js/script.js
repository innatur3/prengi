  var slider = tns({
    container: '.promo__inner',
    items: 1,
    slideBy: 'page',
    speed: 700,
    loop: false,
    autoplay: false,
    mouseDrag: true,
    controls: false, 
  });

    document.querySelector('.prev').addEventListener('click', function () {
      slider.goTo('prev');
    });

    document.querySelector('.next').addEventListener('click', function () {
      slider.goTo('next');
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  (function($) {
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animate__animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  })(jQuery);