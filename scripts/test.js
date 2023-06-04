// cart functions

var productCard = document.querySelector('.product-card');
var image = productCard.querySelector('img');

productCard.addEventListener('mouseover', function() {
  image.src = './img/1_5.png';
});

productCard.addEventListener('mouseout', function() {
  image.src = './img/2.png';
});



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