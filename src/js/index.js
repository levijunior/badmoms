import 'bootstrap';

import '../scss/index.scss';

import 'slick-carousel';


$(".category-carousel").slick({
  infinite: false,
  dots: false,
  arrows: false,
  slidesToShow: 9.2,
  slidesToScroll: 9,
  responsive: [
    {
      breakpoint: 1650,
      settings: {
        slidesToShow: 8.2,
        slidesToScroll: 8,
      }
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 7.2,
        slidesToScroll: 7,
      }
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 6.2,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 5.2,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 3,
      }
    },
  ]
});

$(".scenes-carousel").slick({
  infinite: false,
  dots: false,
  arrows: false,
  slidesToShow: 1.3,
  slidesToScroll: 1
});

$(".extras-carousel").slick({
  infinite: false,
  dots: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 3,
  variableWidth: true
});

$(".actors-carousel").slick({
  infinite: false,
  dots: false,
  arrows: false,
  slidesToShow: 6.2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 5.2,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4.2,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 3,
      }
    },
  ]
})
