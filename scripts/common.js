console.log('test');

// select block

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var select = dropdown.querySelector('select');
    // var select = dropdown.querySelector('.choices__item');
    var button = dropdown.querySelector('button');
  
    select.addEventListener('click', function() {
      dropdown.classList.toggle('open');
    });
});


function toggleElement() {
    var element = document.getElementById("myElement");
    // var element = document.querySelector(".myElement");
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


const photoBlock = document.getElementById('photo-video');
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


document.querySelectorAll('.product-card').forEach(function(card) {
  var mainImage = card.querySelector('img:not(.hover-image)');
  var hoverImage = card.querySelector('.hover-image');
  
  if (mainImage && hoverImage) {
    hoverImage.style.display = 'none';

    card.addEventListener('mouseenter', function() {
      mainImage.style.display = 'none';
      hoverImage.style.display = 'block';
    });

    card.addEventListener('mouseleave', function() {
      mainImage.style.display = 'block';
      hoverImage.style.display = 'none';
    });
  }
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


// menu mobile

document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var menuItems = document.querySelector('.menu-items');

  menuIcon.addEventListener('click', function() {
  // Добавляем задержку в 500 миллисекунд перед показом или скрытием блока
  setTimeout(function() {
  menuItems.classList.toggle('active'); // Добавляем/удаляем класс 'active'
      }, 300);
  });
});



// preloader


window.addEventListener("load", function() {
  var preloader = document.querySelector(".preloader");
  var content = document.querySelector(".content");

  setTimeout(function() {
    preloader.style.display = "none";
    content.classList.add("show-content");
  }, 3000);
});


// select custom

const element = document.querySelector(".js-choice")

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
})