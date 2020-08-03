// -------> Custom
$(document).ready(function () {
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $(".slider").slider();
  $('.sidenav').sidenav();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    duration: 200
  });
  $('.parallax').parallax();
  $('.carousel').carousel({
    numVisible: 7,
    shift: 40,
    padding: 40
  });
  $('.fixed-action-btn').floatingActionButton();
  $('.materialboxed').materialbox();
});
