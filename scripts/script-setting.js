$(document).ready(function() {

// $('.hover-image').hide();


// $('.product-card-img').hover(
//   function() {
//     var hoverImage = $(this).find('.hover-image');
//     var mainImage = $(this).find('img:not(.hover-image)');
//     mainImage.hide();
//     hoverImage.show();
//   },
//   function() {
//     var hoverImage = $(this).find('.hover-image');
//     var mainImage = $(this).find('img:not(.hover-image)');
//     mainImage.show();
//     hoverImage.hide();
//   }
// );



// icon checked

// $('.icon-checked').click(function() {
//   var filledIcon = $(this).find('.filled');
//   var outlineIcon = $(this).find('.outline');
//   filledIcon.toggle();
//   outlineIcon.toggle();
// });


// slider one

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    prevArrow: '#your-prev-button',
    nextArrow: '#your-next-button',
    responsive: [
      {
        breakpoint: 960, // Ширина экрана, при которой будет срабатывать адаптивность
        settings: {
          slidesToShow: 3 // Новое количество отображаемых слайдов для данного breakpoint
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });


// slider two 

$('.slider-two').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'#your-prev-button-two',
  nextArrow:'#your-next-button-two',
  responsive: [
    {
      breakpoint: 960, // Ширина экрана, при которой будет срабатывать адаптивность
      settings: {
        slidesToShow: 3 // Новое количество отображаемых слайдов для данного breakpoint
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


});