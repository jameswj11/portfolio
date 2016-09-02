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
    var $projectBox = $('#project-box').clone()
    var $wrapper    = $('#wrapper')

    if($wrapper.children() != $projectBox) {
      $wrapper.empty()
      $wrapper.prepend($projectBox)
      $projectBox.fadeTo('slow', 1)
    } else {
      $projectBox.fadeTo('slow', 0)
    }
  })

  //render bio upon click
  $('#bio-link').click(function(){
    var $bioBox  = $('#bio-box').clone()
    var $wrapper = $('#wrapper')

    if($wrapper.children() != $bioBox) {
      $wrapper.empty()
      $wrapper.prepend($bioBox)
      $bioBox.fadeTo('slow', 1)
    } else {
      $bioBox.fadeTo('slow', 0)
    }
  })

  //render contact upon click
  $('#contact-link').click(function(){
    var $contactBox  = $('#contact-box').clone()
    var $wrapper = $('#wrapper')

    if($wrapper.children() != $contactBox) {
      $wrapper.empty()
      $wrapper.prepend($contactBox)
      $contactBox.fadeTo('slow', 1)
    } else {
      $contactBox.fadeTo('slow', 0)
    }
  })

})
