$(document).ready(function(){

    //menu
    $('.menu>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(1000);
    });

    //slide
    var now = 0;
    var imgs = 1;
    start ();
    function start(){
        $('#cover img').eq(0).siblings().css({"margin-left":"100px"});
        setInterval(function(){slide();},1000);

        $('#cover p').eq(0).siblings().fadeIn(100);
        setInterval(function(){fade();},2000);
    }
    function slide(){
        now=now==imgs?0:now+=1;
        $('#cover img').eq(now-1).css({"margin-left":"0px"});
        $('#cover img').eq(now).css({"margin-left":"100px"});
    }
    function fade(){
        now=now==imgs?0:now+=1;
        $('#cover p').eq(now-1).fadeIn(500);
        $('#cover p').eq(now).fadeOut(500);
    }


    //main
    $(".logo").click(function(){
        $("#cover").fadeIn("slow"); // fadeIn slow 적용
    });
    $(".profile").click(function(){
        $("#profile").fadeIn("slow"); // fadeIn slow 적용
    });
    $(".web").click(function(){
        $("#web").fadeIn("slow"); // fadeIn slow 적용
    });
    $(".mv").click(function(){
        $("#mv").fadeIn("slow"); // fadeIn slow 적용
    });
    $(".il").click(function(){
        $("#il").fadeIn("slow"); // fadeIn slow 적용
    });
    $(".po").click(function(){
        $("#po").fadeIn("slow"); // fadeIn slow 적용
    });
    $(".le").click(function(){
        $("#le").fadeIn("slow"); // fadeIn slow 적용
    });
    $(".br").click(function(){
        $("#br").fadeIn("slow"); // fadeIn slow 적용
    });
    $(".ba").click(function(){
        $("#ba").fadeIn("slow"); // fadeIn slow 적용
    });


});