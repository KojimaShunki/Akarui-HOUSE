'use strict';

$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 700) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

const humbergerMenu = document.querySelector('.humberger-menu');

const navi = document.getElementById('humberger-navigation');

const shadow = document.querySelector('.shadow');

const humbergerMenuSections = document.querySelectorAll('.humberger-menu-section');

humbergerMenu.addEventListener('click', function () {
  humbergerMenu.classList.toggle('active');
  navi.classList.toggle('active');
  shadow.classList.toggle('active');
});

// humbergerMenuSections.forEach((humbergerMenuSection) => {
//   humbergerMenuSection.addEventListener('click', function () {
//     humbergerMenu.classList.remove('active');
//     navi.classList.remove('active');
//   });
// });