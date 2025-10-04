jQuery(document).ready(function (){
    $('.menu>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(500);
    });

    var imgs=2;
    var now=0;
    start ();
    function start (){
        $('#slide a').eq(0).siblings().css({"margin-left":"-3000px"});
        setInterval(function(){slide ();},2000);
    }
    function slide(){
        now=now==imgs?0:now+=1;
        $('#slide a').eq(now-1).css({"margin-left":"-3000px"});
        $('#slide a').eq(now).css({"margin-left":"0px"});
    }

});