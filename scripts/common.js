console.log('test');

// preloader


  // // Задержка в течение 3 секунд
  // setTimeout(function() {
  //   // Скрыть прелоадер
  //   var preloader = document.querySelector('.preloader');
  //   preloader.style.display = 'none';
    
  //   // Отобразить основное содержимое страницы с плавным появлением
  //   var content = document.querySelector('#content');
  //   content.classList.remove('hidden');
  //   content.classList.add('fade-in-transition');
    
  //   // Инициализировать Slick Slider после появления контента
  //   var slider = document.querySelector('.slider');
  //   // Ваш код инициализации Slick Slider
  // }, 3000);



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


// video play block slider


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



// hover image


document.querySelectorAll('.hover-image').forEach(function(element) {
  element.style.display = 'none';
  });
  
document.querySelectorAll('.product-card-img').forEach(function(element) {
  element.addEventListener('mouseenter', function() {
  var hoverImage = this.querySelector('.hover-image');
  var mainImage = this.querySelector('img:not(.hover-image)');
  mainImage.style.display = 'none';
  hoverImage.style.display = 'block';
});
  
element.addEventListener('mouseleave', function() {
  var hoverImage = this.querySelector('.hover-image');
  var mainImage = this.querySelector('img:not(.hover-image)');
  mainImage.style.display = 'block';
  hoverImage.style.display = 'none';
  });
});


// icon checked

  
document.querySelectorAll('.icon-checked').forEach(function(element) {
  element.addEventListener('click', function() {
  var filledIcon = this.querySelector('.filled');
  var outlineIcon = this.querySelector('.outline');
  filledIcon.style.display = filledIcon.style.display === 'none' ? 'block' : 'none';
  outlineIcon.style.display = outlineIcon.style.display === 'none' ? 'block' : 'none';
    });
});


// cart like counter

let counterValue = 0;
    
function updateCounter(index) {
  const counterElement = document.getElementById('counter-cart');
  const icons = document.getElementsByClassName('icon-cart');

  if (counterValue === 0) {
    counterElement.style.display = 'block';
  }

  if (icons[index].classList.contains('active')) {
    counterValue--;
    icons[index].classList.remove('active');
  } else {
    counterValue++;
    icons[index].classList.add('active');
  }

  counterElement.textContent = counterValue;

  if (counterValue === 0) {
    counterElement.style.display = 'none';
  }
}

