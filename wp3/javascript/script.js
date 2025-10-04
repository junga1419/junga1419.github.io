jQuery(document).ready(function () {

  //menu
  $('.menu>li').mouseover(function(){
    $('.sub').stop().slideDown(600);
    $('#mbg').stop().slideDown(600);
  }).mouseout(function(){
    $('.sub').stop().slideUp(600);
    $('#mbg').stop().slideUp(600);
  });

  //slide
  var imgs=2;
  var now=0;
  start ();
  function start (){
    $('#slide a').eq(0).siblings().fadeOut(1000);
    setInterval(function(){fade();},4000);
  }
  function fade (){
    now=now==imgs?0:now+=1;
    $('#slide a').eq(now-1).fadeOut(1000);
    $('#slide a').eq(now).fadeIn(1000);
  }
});


