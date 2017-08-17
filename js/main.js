$(function(){
    onloadHTML();
});

function onloadHTML(){
    var domJSON = {
        header:'<div class="nav"><ul><li class="active"><a href="#">云翼信息</a></li><li><a href="#">首页</a></li><li><a href="#">课程指南</a></li><li><a href="#">学习内容</a></li><li><a href="#">教师介绍</a></li><li><a href="#">制作团队</a></li></ul></div><div class="header"></div>',
        header2:'<div class="nav2"><ul><li>云翼科技</li><li class="active"><a href="###">首页</a></li><li><a href="###">课程指南</a></li><li><a href="###">学习内容</a></li><li><a href="###">教师介绍</a></li><li><a href="###">制作团队</a></li></ul></div><div class="header"></div>',
        footer :'<div class="footer"><div class="den"></div></div>'
    }
    $(".container .main").before(domJSON.header2).after(domJSON.footer);
}