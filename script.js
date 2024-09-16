

$(document).ready(function() {
    // First Modal
    $('#showModal').click(function() {
        $('#modal').fadeIn();
        $('.modal-content').css('bottom', '0');
    });

    $('.close').click(function() {
        $('.modal-content').css('bottom', '-100%');
        $('#modal').fadeOut();
    });



    // Second Half Modal
    $('#sell-btn').click(function() {
        $('#halfModal').fadeIn();
        $('.half-modal-content').css('bottom', '0');
    });

    $('.close-half').click(function() {
        $('.half-modal-content').css('bottom', '-100%');
        $('#halfModal').fadeOut(300);

    });


 // 33333 Half Modal
    $('#thirdbuton').click(function() {
        $('#thirdModal').fadeIn();
        $('.third-modal-content').css('bottom', '0');
    });

    $('.close-backbtn').click(function() {
        $('.third-modal-content').css('bottom', '-100%');
        $('#thirdModal').fadeOut();

    });




  // 4444 Half Modal
    $('#BtnPage4').click(function() {
        $('#forthModal').fadeIn();
        $('.forth-modal-content').css('bottom', '0');
    });

    $('.close_btn_page4').click(function() {
        $('.forth-modal-content').css('bottom', '-100%');
        $('#forthModal').fadeOut();

    });




});


let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');

const end = () => {
  isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft; 
}

const move = (e) => {
  if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
  slider.addEventListener('mousedown', start);
  slider.addEventListener('touchstart', start);

  slider.addEventListener('mousemove', move);
  slider.addEventListener('touchmove', move);

  slider.addEventListener('mouseleave', end);
  slider.addEventListener('mouseup', end);
  slider.addEventListener('touchend', end);
})();







