// -------> Custom
$(document).ready(function () {

  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $(".slider").slider();
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.fixed-action-btn').floatingActionButton();
  $('.materialboxed').materialbox();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    duration: 200
  });

  $('.carousel').carousel({
    numVisible: 7,
    shift: 40,
    padding: 40
  });

  $('textarea#message').characterCounter();
});
