$(function(){

  //variable for ending css animation
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  //render nav links once header is loaded
  $('h2').one(animationEnd, function(){
    $('.link').css('display', 'inline-block')
    $('#nav-links').addClass('animated slideInRight')
  })

  //render project links upon click
  $('#project-link').click(function(){
    $('#project-box').fadeTo('slow', 1);
  })

  //render bio upon click
  $('#bio-link')

})
