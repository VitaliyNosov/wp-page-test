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

