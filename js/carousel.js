$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        margin: 5,
        smartSpeed: 500,
        responsive: {
          0: {
            items: 1,
          },
          500: {
            items: 2,
          },
          1000: {
            items: 3 || 4,
          },
        },
      });
  });


