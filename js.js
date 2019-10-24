$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('.header #nav').slideToggle(500);
  });

  $(window).resize(function(){
    if ( $(window).width()>500){
      $('.header #nav').removeAttr('style');
    }
  });
});
