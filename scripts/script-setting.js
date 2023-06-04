$(document).ready(function() {

$('.hover-image').hide();


$('.product-card-img').hover(
  function() {
    var hoverImage = $(this).find('.hover-image');
    var mainImage = $(this).find('img:not(.hover-image)');
    mainImage.hide();
    hoverImage.show();
  },
  function() {
    var hoverImage = $(this).find('.hover-image');
    var mainImage = $(this).find('img:not(.hover-image)');
    mainImage.show();
    hoverImage.hide();
  }
);



// icon checked

$('.icon-checked').click(function() {
  var filledIcon = $(this).find('.filled');
  var outlineIcon = $(this).find('.outline');
  filledIcon.toggle();
  outlineIcon.toggle();
});


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
    focusOnSelect: true
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
});


});