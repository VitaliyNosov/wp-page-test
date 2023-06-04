window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.getElementById('preloader').style.opacity = '0';
      document.getElementById('logo').style.display = 'block';
      document.getElementById('content').style.opacity = '1';
    }, 3000);
  });

  