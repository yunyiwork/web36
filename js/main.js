$(function(){
    $(".container .main").before(domJSON.header).after(domJSON.footer);
});

var domJSON = {
    header:'<div class="nav"><ul><li class="active"><a href="#">云翼信息</a></li><li><a href="http://127.0.0.1:8020/web36/index.html">首页</a></li><li><a href="#">课程指南</a></li><li><a href="#">学习内容</a></li><li><a href="#">教师介绍</a></li><li><a href="#">制作团队</a></li></ul></div><div class="header"></div>',
    footer :'<div class="footer"><div class="den"></div><ul class="action"></ul></div>',
    ball:'<div class="ball"><div class="b1"><img src="../../images/note.png" alt="笔记"><p>笔记</p></div><div class="b2"><img src="../../images/shuqian.png" alt="书签"><p>书签</p></div><div class="b3"><img src="../../images/pregress.png" alt="进度"><p>进度</p></div><div class="b4"><img src="../../images/work.png" alt="作业"><p>作业</p></div></div>',
    pop:'<div class="pop"><div class="pop-header"><h3>笔记</h3><span>x</span></div><div class="pop-main"></div></div>'
}
var chapterArr = {
    c01 : [domJSON.ball,domJSON.pop]
}

function load(arr){
    for(var i = 0; i<arr.length; i++){
        $(".container .main").after(arr[i]);
    }
}

function gotoPage(url){
    $.get(url,function(data,status){
        $(".container .main").html(data);
    })
}