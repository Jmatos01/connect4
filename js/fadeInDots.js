function fadeInDots() {
    var dots = document.querySelectorAll('.dot');
    for(let i = 0; i < dots.length; i++) {
      setTimeout(function() {
        dots[i].classList.add('appear');
      }, 100 + Math.random() * 1500);
    }
  }
  
  module.exports = fadeInDots;