$(function(){
    onloadHTML();
    (function(){
        var lock = true;
        $('.ball').mouseover(function(e){
            e.stopPropagation();
            $(this).stop().animate({"opacity":.9});
        }).mouseout(function(){
            if(lock){
                $(this).stop().animate({"opacity":.5});
            }
        }).click(function(){
            if(lock){
                $('.b1').stop().animate({"opacity":1,"left":-60,"top":-60});
                $('.b2').stop().animate({"opacity":1,"right":-60,"top":-60});
                $('.b3').stop().animate({"opacity":1,"left":-60,"bottom":-60});
                $('.b4').stop().animate({"opacity":1,"right":-60,"bottom":-60});
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
        $('.ball > div').mouseover(function(){
            $(this).find("img").attr("src",$(this).find("img").attr("src").replace('.png','-a.png'));
            $(this).find('p').css('color','#ffba00');
        }).mouseout(function(){
            $(this).find('img').attr("src",$(this).find("img").attr("src").replace('-a',''));
            $(this).find('p').css('color','#222');
        })
    })();
});

function onloadHTML(){
    var domJSON = {
        header:'<div class="nav"><ul><li class="active"><a href="#">云翼信息</a></li><li><a href="#">首页</a></li><li><a href="#">课程指南</a></li><li><a href="#">学习内容</a></li><li><a href="#">教师介绍</a></li><li><a href="#">制作团队</a></li></ul></div><div class="header"></div>',
        header2:'<div class="nav2"><ul><li>云翼科技</li><li class="active"><a href="###">首页</a></li><li><a href="###">课程指南</a></li><li><a href="###">学习内容</a></li><li><a href="###">教师介绍</a></li><li><a href="###">制作团队</a></li></ul></div><div class="header"></div>',
        footer :'<div class="footer"><div class="den"></div></div>'
    }
    $(".container .main").before(domJSON.header2).after(domJSON.footer);
}