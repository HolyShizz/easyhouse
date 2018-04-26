$(document).ready(function(){
  $('.slick-carousel').slick({
    arrows:true,
    fade:true,
    speed:500,
    cssEase: 'linear',
  });
});
$( "div.pure-u-1-4" ).click(function(e) {
  e.preventDefault();
  $("div.pure-u-1-4").removeClass('active-menu');
  $( this ).addClass('active-menu');
});