jQuery(document).ready(function(){
    //menu
    $('.menu>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500);
        $('.sbg').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(500);
        $('.sbg').stop().slideUp(500);
    });
    //slide
    var imgs=2;
    var now=0;
    start ();
    function start (){
        $('#slide a').eq(0).siblings().css({"margin-top":"1000px"});
        setInterval(function(){slide();},3000);
    }
    function slide (){
        now=now==imgs?0:now+=1;
        $('#slide a').eq(now-1).siblings().css({"margin-top":"1000px"});
        $('#slide a').eq(now).siblings().css({"margin-top":"0px"});
    }
    //tab
    $(function(){
        $('#tab>ul>li>a').click(function(){
        $(this).parent().addClass("active")
        .siblings().removeClass("active");
        return false;
    });
    });
    
}); 