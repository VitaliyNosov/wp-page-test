console.log('test');

// select block

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var select = dropdown.querySelector('select');
    var button = dropdown.querySelector('.button');
  
    select.addEventListener('click', function() {
      dropdown.classList.toggle('open');
    });
});


function toggleElement() {
    var element = document.getElementById("myElement");
    var button = document.getElementById("myButton");

    if (element.style.display === "none") {
    element.style.display = "block";
    button.classList.add("black-button");
    } else {
    element.style.display = "none";
    button.classList.remove("black-button");
   }
}


// popup

var description = document.getElementById("description");
var isDescriptionVisible = false;

function toggleDescription() {
    if (!isDescriptionVisible) {
        description.style.display = "block";
        isDescriptionVisible = true;
    } else {
        description.style.display = "none";
        isDescriptionVisible = false;
    }
}

// search

const searchIcon = document.getElementById("search-icon");
const searchField = document.getElementById("search-field");

searchIcon.addEventListener("click", function() {
  searchField.classList.toggle("active");
});


// icons counter

let count = 0;
const counterElementIcon = document.getElementById('counter');
const counterElementValue = document.getElementById('counterValue');

function incrementCounter() {
  count++;
  if (count !== 0) {
    counterElementIcon.textContent = count.toString();
    counterElementValue.textContent = count.toString();
    counterElementValue.style.display = 'inline';
  } else {
    counterElementValue.style.display = 'none';
  }
}


// // slider one

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: false,
//   focusOnSelect: true
// });

// $('a[data-slide]').click(function(e) {
//   e.preventDefault();
//   var slideno = $(this).data('slide');
//   $('.slider-nav').slick('slickGoTo', slideno - 1);
// });


// Если у вас больше одного блока с фото, вам может потребоваться добавить идентификаторы или классы для точного выбора элементов.
// В этом примере предполагается, что у вас только один блок с фото и видео.

// const photoBlock = document.querySelector('.photo-block');
// const video = photoBlock.querySelector('video');

// photoBlock.addEventListener('mouseover', function() {
//   video.play();
// });

// photoBlock.addEventListener('mouseout', function() {
//   video.pause();
//   video.currentTime = 0;
// });




const photoBlock = document.querySelector('.photo-block');
const video = photoBlock.querySelector('video');

function playVideo() {
  return new Promise((resolve, reject) => {
    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => resolve())
          .catch(error => reject(error));
      }
    } else {
      resolve();
    }
  });
}

function pauseVideo() {
  return new Promise((resolve, reject) => {
    if (!video.paused) {
      video.pause();
      video.currentTime = 0;
    }
    resolve();
  });
}

photoBlock.addEventListener('mouseenter', function() {
  playVideo()
    .then(() => {
      // Video started playing successfully
      console.log('Video started playing');
    })
    .catch(error => {
      // Error occurred while starting video playback
      console.error('Failed to start video playback:', error);
    });
});

photoBlock.addEventListener('mouseleave', function() {
  pauseVideo()
    .then(() => {
      // Video paused and reset successfully
      console.log('Video paused and reset');
    });
});
