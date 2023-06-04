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





// cart functions


// var productCard = document.querySelector('.product-card');
// var image = productCard.querySelector('img');

// productCard.addEventListener('mouseover', function() {
//   image.src = './img/1_5.png';
// });

// productCard.addEventListener('mouseout', function() {
//   image.src = './img/2.png';
// });



// Получаем ссылки на изображения иконок


const outlineIcon = document.querySelector('.icon-heart .outline');
const filledIcon = document.querySelector('.icon-heart .filled');

// Добавляем обработчик события на клик по иконке
outlineIcon.addEventListener('click', function() {
      // Скрываем иконку 'outline'
    outlineIcon.style.display = 'none';
      // Показываем иконку 'filled'
    filledIcon.style.display = 'inline-block';
});

filledIcon.addEventListener('click', function() {
    filledIcon.style.display = 'none';
    outlineIcon.style.display = 'inline-block';
});

console.log("123");