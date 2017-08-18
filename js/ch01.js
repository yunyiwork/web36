$(function(){
    load(chapterArr.c01);
    (function(){
        var lock = true;
        $('.ball').mouseover(function(e){
            $(this).stop().animate({"opacity":.9});
            e.cancelBubble;
            e.stopPropagation();
        }).mouseout(function(){
            if(lock){
                $(this).stop().animate({"opacity":.5});
            }
        }).on('click',function(){
            if(lock){
                $('.b1').stop().animate({"opacity":1,"left":0,"top":-60});
                $('.b2').stop().animate({"opacity":1,"left":0,"top":-120});
                $('.b3').stop().animate({"opacity":1,"left":0,"bottom":-60});
                $('.b4').stop().animate({"opacity":1,"left":0,"bottom":-120});
            }else{
                $('.b1').stop().animate({"opacity":0,"left":0,"top":0})
                $('.b2').stop().animate({"opacity":0,"right":0,"top":0})
                $('.b3').stop().animate({"opacity":0,"left":0,"bottom":0})
                $('.b4').stop().animate({"opacity":0,"right":0,"bottom":0})
            }
            lock = !lock;
        });
        window.onscroll  = function(event){
            var top = 577+$(this).scrollTop();
            $('.ball').animate({'top':top},10,'swing')
        }
        //控制球体
        // $('.ball > div').mouseover(function(){
        //     $(this).find("img").attr("src",$(this).find("img").attr("src").replace('.png','-a.png'));
        //     $(this).find('p').css('color','#ffba00');
        // }).mouseout(function(){
        //     $(this).find('img').attr("src",$(this).find("img").attr("src").replace('-a',''));
        //     $(this).find('p').css('color','#222');
        // })
    })();
    // 添加功能到footer
    (function(){
        var footer_action = $('.footer_action').html();
        $('.footer>.action').html(footer_action);
    })();
});