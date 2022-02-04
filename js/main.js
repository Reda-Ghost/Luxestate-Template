$(document).ready(function () {

  // show Mobile Nav
  $(".menu-btn").click(function () { 
    $(".mobile-nav").slideToggle(500);
  });

  // toggle icon Menu in menu btn
  $(".menu-btn .fa-bars").click(function(){
    $(this).fadeOut();
    $(".header .menu-btn .fa-times").fadeIn();
  })
  $(".header .menu-btn .fa-times").click(function(){
    $(this).fadeOut();
    $(".header .menu-btn .fa-bars").fadeIn();
  });

  // add box shadow on scroll to navbar
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $(".nav-bar").addClass("shadow");
    }
    else {
      $(".nav-bar").removeClass("shadow");
    }
  });
});