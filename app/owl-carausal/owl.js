
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 2000,
      nav: false, // Disable navigation arrows
      responsive: {
        0: {
          items: 2,
          nav: false,
          loop: true
        },
        768: {
          items: 3,
          nav: false,
          loop: true
        },
       
        991: {
          items: 4,
          nav: false,
          loop: false
        },
        1300: {
          items: 5,
          nav: false,
          loop: false
         
        }
      }
    });
  });

