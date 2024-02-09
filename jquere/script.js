jQuery(document).ready(function($){

$('.side-bar').click(function(){
  $('.nav_wrapper').addClass('open_menu')
})
$('.cross_toggel').click(function(){
  $('.nav_wrapper').removeClass('open_menu')
})


  AOS.init();

})