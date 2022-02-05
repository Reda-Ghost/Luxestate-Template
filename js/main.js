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

  // window Scrolling Scripts
  $(window).scroll(function () { 
    // scrolling to top 
    let scrollingTop = $(".scroll-top");
    if ($(window).scrollTop() > 900) {
      if(scrollingTop.is(":hidden")) {
        scrollingTop.fadeIn(600).css("display","flex");
      }
    } else {
      scrollingTop.fadeOut(600);
    }
    scrollingTop.click(function() {
      $(window).scrollTop(0)
    })
  });
});