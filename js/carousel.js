$(document).ready(function () {
  $('.owl-one').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 15000,
    autoplayHoverPause: true,
    margin: 5,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1350: {
        autoplay: false,
        loop: false,
        items: 3 || 4,
        margin: 20,
      },
    },
  });

  $('.owl-two').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 15000,
    autoplayHoverPause: true,
    margin: 5,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 1,
      },
      1350: {
        items: 1,
      },
    },
  });

  $('.owl-three').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 15000,
    autoplayHoverPause: true,
    margin: 5,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 3,
      },
      1150: {
        dots: false,
        items: 4,
      },
      1350: {
        dots: false,
        items: 5,
      },
    },
  });
});
